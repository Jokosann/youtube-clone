import { useStore } from '../../libs/zustand';
import { cn } from '../../utils/cn';
import Navbar from '../ui/navbar/Navbar';
import SidebarUp from '../ui/sidebar/SidebarUp';
import SidebarDown from '../ui/sidebar/SidebarDown';

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarAbsoluteActive, setFalseSidebarAbsoluteActive } = useStore();

  return (
    <>
      <div
        onClick={setFalseSidebarAbsoluteActive}
        className={cn('back-container xl:hidden', {
          active: sidebarAbsoluteActive,
        })}
      />
      <Navbar />
      <SidebarDown />
      <SidebarUp />
      <div
        className={cn('mt-32 ml-20', {
          'ml-[240px]': sidebarAbsoluteActive,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default HeaderLayout;
