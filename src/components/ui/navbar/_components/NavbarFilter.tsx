import useSidebar from '@/lib/zustand/useSidebar';
import { forwardRef } from 'react';
import { Button } from '../../Button';
import { cn } from '@/lib/utils';
import Arrows from '../../svg/Arrows';
import { navbarFilter } from '@/data/constants';

type IProps = {
  state: {
    navFilter: string;
    setNavFilter: React.Dispatch<React.SetStateAction<string>>;
    arrowFilterRight: boolean;
    arrowFilterLeft: boolean;
  };
};

const NavbarFilter = forwardRef<HTMLDivElement, IProps>(({ state }: IProps, ref) => {
  const { sidebarActive } = useSidebar();
  const { arrowFilterLeft, arrowFilterRight, navFilter, setNavFilter } = state;

  return (
    <div
      className={cn('relative flex items-center -mt-2 px-2 md:ml-20', {
        'xl:ml-[240px]': sidebarActive,
      })}
    >
      {arrowFilterLeft && (
        <div className="absolute top-0 left-0 flex justify-center items-center w-8 h-[60px] bg-white z-30">
          <div className=" absolute top-1/2 -translate-y-1/2 -left-3 w-12 aspect-square rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:bg-gray-100">
            <Arrows className="scale-125 rotate-180" />
          </div>
        </div>
      )}

      <div
        ref={ref}
        className={cn(
          'w-full scroll-fillter-container overflow-x-auto mt-3',
          { 'mask-left': arrowFilterLeft && !arrowFilterRight },
          { 'mask-right': arrowFilterRight && !arrowFilterLeft },
          { mask: arrowFilterRight && arrowFilterLeft }
        )}
      >
        <div className="flex gap-3">
          {navbarFilter.map((item: string, index: number) => (
            <Button
              variant="secondary"
              size="sm"
              key={index}
              onClick={() => setNavFilter(item)}
              className={cn('rounded-lg capitalize whitespace-nowrap snap-end', {
                'bg-black text-white': navFilter === item,
              })}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {arrowFilterRight && (
        <div className="absolute top-0 right-0 flex justify-center items-center w-8 h-[60px] bg-white z-30">
          <div className=" absolute top-1/2 -translate-y-1/2 -right-3 w-12 aspect-square rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:bg-gray-100">
            <Arrows className="scale-125" />
          </div>
        </div>
      )}
    </div>
  );
});

export default NavbarFilter;
