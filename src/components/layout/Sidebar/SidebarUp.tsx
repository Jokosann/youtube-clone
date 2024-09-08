import { useState } from 'react';
import useSidebarStore from '@/store/useSidebarStore.ts';
import { cn } from '@/utils/cn.ts';
import HambergerMenu from '@/components/ui/svg/HambergerMenu';
import YoutubeLogo from '@/components/ui/svg/YoutubeLogo';
import { ScrollArea } from '@/components/ui/ScrollArea';
import SidebarUpMenuGroub from '@/components/layout/Sidebar/SidebarUpMenuGroub';
import { listSidebarUp } from '@/data/constants';
import Arrows from '@/components/ui/svg/Arrows';

const SidebarUp = () => {
  const [sidebarUpActive, setSidebarUpActive] = useState('home');
  const { sidebarActive, setSidebarActive } = useSidebarStore();

  return (
    <aside
      className={cn(
        'fixed top-0 xl:top-[3.8rem] -left-[240px] z-30 w-[240px] h-screen xl:h-[calc(100vh-3.8rem)] overflow-hidden bg-white pl-2 pt-2 transition-all xl:transition-none',
        { 'left-0 xl:left-0': sidebarActive }
      )}
      role="complementary"
      aria-label="Sidebar"
    >
      {/* LOGO */}
      <div className="w-full absolute flex items-center gap-4 px-2 bg-white z-40 xl:hidden">
        <div
          onClick={() => {
            if (typeof setSidebarActive === 'function') setSidebarActive();
          }}
          className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100"
        >
          <HambergerMenu className="w-10 aspect-square" />
        </div>

        <div className="logo">
          <YoutubeLogo className="w-[90px] h-5" />
        </div>
      </div>

      <ScrollArea className="w-full h-full pt-[60px] xl:pt-0">
        {/* HOME */}
        <div className="px-1 pb-3 border-b border-b-gray-500/30">
          {listSidebarUp.main.map((item, i) => (
            <SidebarUpMenuGroub key={i} data={{ item, sidebarUpActive, setSidebarUpActive }}>
              {sidebarUpActive === item.name ? item.iconActive : item.icon}
            </SidebarUpMenuGroub>
          ))}
        </div>

        {/* YOU */}
        <div className="mt-3 pb-3 border-b border-b-gray-500/30">
          <div className="flex items-center gap-2 px-3 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer">
            <p className="font-medium ml-1">You</p> <Arrows />
          </div>
          {listSidebarUp.you.map((item, i) => (
            <SidebarUpMenuGroub key={i} data={{ item, sidebarUpActive, setSidebarUpActive }}>
              {sidebarUpActive === item.name && item.iconActive ? item.iconActive : item.icon}
            </SidebarUpMenuGroub>
          ))}
        </div>

        {/* SUBCRIPTIONS */}
        <div className="pb-3 border-b border-b-gray-500/30">
          <div className="flex items-center gap-2 px-3 pt-4 pb-1">
            <p className="font-medium ml-1">Subscriptions</p>
          </div>
          {listSidebarUp.subscriptions.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer"
            >
              <img src={item.image} alt={`user ${i + 1}`} className="w-6 aspect-square rounded-full" />
              <span className="truncate text-sm">{item.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer">
            <div className="w-6 aspect-square flex justify-center items-center">
              <Arrows className="rotate-90 scale-125" />
            </div>
            <span className="truncate text-sm">Show more</span>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="pb-3 border-b border-b-gray-500/30">
          <div className="flex items-center gap-2 px-3 pt-4 pb-1">
            <p className="font-medium ml-1">Explore</p>
          </div>
          {listSidebarUp.explore.map((item, i) => (
            <SidebarUpMenuGroub key={i} data={{ item, sidebarUpActive, setSidebarUpActive }}>
              {sidebarUpActive === item.name ? item.iconActive : item.icon}
            </SidebarUpMenuGroub>
          ))}
        </div>

        {/* MORE */}
        <div className="pb-3 border-b border-b-gray-500/30">
          <div className="flex items-center gap-2 px-3 pt-4 pb-1">
            <p className="font-medium ml-1">More from Youtube</p>
          </div>
          {listSidebarUp.more.map((item, i) => (
            <SidebarUpMenuGroub key={i} data={{ item, sidebarUpActive, setSidebarUpActive }}>
              {item.icon}
            </SidebarUpMenuGroub>
          ))}
        </div>

        {/* SETTINGS */}
        <div className="pb-3 border-b border-b-gray-500/30 pt-4">
          {listSidebarUp.service.map((item, i) => (
            <SidebarUpMenuGroub key={i} data={{ item, sidebarUpActive, setSidebarUpActive }}>
              {item.icon}
            </SidebarUpMenuGroub>
          ))}
        </div>

        {/* FOOTER */}
        <div className="px-4 py-4 space-y-2">
          <p className="text-[13px] leading-[18px] text-[#606060] font-medium">
            About Press Copyright Contact us Creator Advertise Developers
          </p>
          <p className="text-[13px] leading-[18px] text-[#606060] font-medium">
            Terms Privacy Policy & Safety How YouTube worksTest new features
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
