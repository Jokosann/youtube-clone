import { useState } from 'react';
import useSidebarStore from '@/store/useSidebarStore.ts';
import { cn } from '@/utils/cn.ts';
import HambergerMenu from '@/components/ui/svg/HambergerMenu';
import YoutubeLogo from '@/components/ui/svg/YoutubeLogo';
import { ScrollArea } from '@/components/ui/ScrollArea';
import SidebarUpMenuGroub from '@/components/layout/Sidebar/SidebarUpMenuGroub';
import { listSidebarUp } from '@/data/constants';
import Arrows from '@/components/ui/svg/Arrows';
import { useLocation } from 'react-router-dom';
import { ISidebarMenuGroub } from '@/types/navbar-sidebar';

const sidebarPath = ['/detail'];

const SidebarUp = () => {
  const [sidebarUpActive, setSidebarUpActive] = useState('Home');
  const { sidebarActive, setSidebarActive } = useSidebarStore();
  const { pathname } = useLocation();
  const isSidebarPath = sidebarPath.includes(pathname);

  const handleSidebarToggle = () => {
    if (typeof setSidebarActive === 'function') setSidebarActive();
  };

  const renderMenuGroup = (items: ISidebarMenuGroub[], title?: string) => (
    <div className="pb-3 border-b border-b-gray-500/30">
      {title && (
        <div className="flex items-center gap-2 px-3 pt-4 pb-1">
          <p className="font-medium ml-1">{title}</p>
        </div>
      )}

      {title === 'Subscriptions' &&
        listSidebarUp.subscriptions.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer"
          >
            <img
              src={item.icon}
              alt={`user ${i + 1}`}
              className="w-6 aspect-square rounded-full flex-shrink-0"
            />
            <span className="truncate text-sm">{item.name}</span>
          </div>
        ))}

      {title === 'Subscriptions' && (
        <div className="flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer">
          <div className="w-6 aspect-square flex justify-center items-center">
            <Arrows className="rotate-90 scale-125" />
          </div>
          <span className="truncate text-sm">Show more</span>
        </div>
      )}

      {title !== 'Subscriptions' &&
        items.map((item: ISidebarMenuGroub, i: number) => (
          <SidebarUpMenuGroub key={i} data={{ item, sidebarUpActive, setSidebarUpActive }}>
            {sidebarUpActive === item.name && item.iconActive ? item.iconActive : item.icon}
          </SidebarUpMenuGroub>
        ))}
    </div>
  );

  return (
    <aside
      className={cn(
        'fixed z-30 w-[240px] h-screen overflow-hidden bg-white pl-2 pt-2 transition-all',
        { '-left-[240px]': !sidebarActive },
        { 'left-0': sidebarActive },
        { 'top-0 xl:top-[3.8rem] xl:transition-none': !isSidebarPath },
        { 'top-0': isSidebarPath }
      )}
      role="complementary"
      aria-label="Sidebar"
    >
      <div
        className={cn('w-full absolute top-0 left-0 flex items-center gap-4 px-2 bg-white z-[9999]', {
          'xl:hidden': !isSidebarPath,
        })}
      >
        <div
          onClick={handleSidebarToggle}
          className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100"
        >
          <HambergerMenu className="w-10 aspect-square" />
        </div>

        <div className="logo">
          <YoutubeLogo className="w-[90px] h-5" />
        </div>
      </div>

      <ScrollArea className="w-full h-full pt-[60px] xl:pt-0 pr-4">
        {renderMenuGroup(listSidebarUp.main)}
        {renderMenuGroup(listSidebarUp.you, 'You')}
        {renderMenuGroup(listSidebarUp.subscriptions, 'Subscriptions')}
        {renderMenuGroup(listSidebarUp.explore, 'Explore')}
        {renderMenuGroup(listSidebarUp.more, 'More from Youtube')}
        {renderMenuGroup(listSidebarUp.service, 'Settings')}

        <div className="px-4 py-4 space-y-2">
          <p className="text-[13px] leading-[18px] text-[#606060] font-medium">
            About Press Copyright Contact us Creator Advertise Developers
          </p>
          <p className="text-[13px] leading-[18px] text-[#606060] font-medium">
            Terms Privacy Policy & Safety How YouTube works Test new features
          </p>
          <p className="text-xs leading-[18px] text-[#909090] pt-2">
            © {new Date().getFullYear()} Codesann.
          </p>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default SidebarUp;
