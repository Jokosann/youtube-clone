import { RxHamburgerMenu } from 'react-icons/rx';

import LogoYt from '/images/yt-logo.png';
import { useStore } from '../../../libs/zustand';
import { cn } from '../../../utils/cn';

const SidebarUp = () => {
  const { sidebarAbsoluteActive, setFalseSidebarAbsoluteActive } = useStore();

  return (
    <aside
      className={cn(
        'fixed top-0 xl:top-16 -left-[240px] z-30 w-[240px] min-h-screen bg-white p-2 transition-all xl:transition-none',
        {
          'left-0 xl:left-0': sidebarAbsoluteActive,
        }
      )}
      role="complementary"
      aria-label="Sidebar"
    >
      <div className="flex items-center gap-5 xl:hidden">
        <div
          onClick={setFalseSidebarAbsoluteActive}
          className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100"
        >
          <RxHamburgerMenu className="text-xl" />
        </div>

        <div className="w-[5.5rem]">
          <img src={LogoYt} alt="Logo Youtube" />
        </div>
      </div>
      <div>SidebarAbsolute</div>
    </aside>
  );
};

export default SidebarUp;
