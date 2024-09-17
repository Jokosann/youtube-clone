import { useEffect, useRef, useState } from 'react';
import Arrows from '@/components/ui/svg/Arrows';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

const CategoryPills = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) => {
  const navFilterRef = useRef<HTMLDivElement | null>(null);

  const [translate, setTranslate] = useState(0);
  const [arrowFilterRight, setArrowFilterRight] = useState(false);
  const [arrowFilterLeft, setArrowFilterLeft] = useState(false);

  useEffect(() => {
    if (navFilterRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;
      setArrowFilterLeft(translate > 0);
      setArrowFilterRight(translate + container.clientWidth < container.scrollWidth);
    });

    observer.observe(navFilterRef.current);

    return () => observer.disconnect();
  }, [translate]);

  function handleClickArrowLeft() {
    setTranslate((prevTranslate) => {
      const newTranslate = prevTranslate - 200;

      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  }

  function handleClickArrowRight() {
    setTranslate((prevTranslate) => {
      if (navFilterRef.current == null) return prevTranslate;

      const newTranslate = translate + 200;
      const edge = navFilterRef.current.scrollWidth;
      const width = navFilterRef.current.clientWidth;

      if (newTranslate + width >= edge) return edge - width;
      return newTranslate;
    });
  }

  return (
    <div ref={navFilterRef} className="relative w-full overflow-hidden py-1">
      <div
        className="flex whitespace-nowrap gap-3 items-center transition-transform w-[max-content]"
        style={{
          transform: `translateX(-${translate}px)`,
        }}
      >
        {children}
      </div>

      {arrowFilterLeft && (
        <div className="absolute top-0 left-0 flex justify-start bg-gradient-to-r from-white from-50% to-transparent items-center w-28 h-full z-30">
          <Button variant="ghost" size="icon" onClick={handleClickArrowLeft}>
            <Arrows className="scale-125 rotate-180" />
          </Button>
        </div>
      )}

      {arrowFilterRight && (
        <div className="absolute top-0 right-0 flex justify-end bg-gradient-to-l from-white from-50% to-transparent items-center w-28 h-full z-30">
          <Button variant="ghost" size="icon" onClick={handleClickArrowRight}>
            <Arrows className="scale-125" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;
