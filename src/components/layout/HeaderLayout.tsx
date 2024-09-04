import { useStore } from '../../lib/zustand';
import { cn } from '../../utils/cn';
import Navbar from '../ui/navbar/Navbar';
import SidebarUp from '../ui/sidebar/SidebarUp';
import SidebarDown from '../ui/sidebar/SidebarDown';

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarActive, setSidebarActive } = useStore();

  return (
    <>
      <div
        onClick={setSidebarActive}
        className={cn('back-container xl:hidden', {
          active: sidebarActive,
        })}
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
