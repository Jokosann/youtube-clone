import { useEffect } from 'react';
import useSidebar from '../../lib/zustand/useSidebar';
import Navbar from '../ui/navbar/Navbar';
import SidebarUp from '../ui/sidebar/SidebarUp';
import SidebarDown from '../ui/sidebar/SidebarDown';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/useMediaQuery';

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarActive, setSidebarActive } = useSidebar();

  const isDekstop = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    const body = document.body;

    if (sidebarActive && !isDekstop) {
      body.style.overflow = 'hidden';
    } else {
      body.removeAttribute('style');
    }

    // Cleanup on unmount
    return () => body.removeAttribute('style');
  }, [isDekstop, sidebarActive]);

  const handleSidebarToggle = () => {
    if (typeof setSidebarActive === 'function') {
      setSidebarActive();
    }
  };

  return (
    <>
      <div
        onClick={handleSidebarToggle}
        className={cn('back-container xl:hidden', { active: sidebarActive })}
      />
      <Navbar />
      <SidebarDown />
      <SidebarUp />
      <div
        className={cn('mt-36 md:ml-20 px-4 md:px-6', {
          'xl:ml-[240px]': sidebarActive,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default HeaderLayout;
