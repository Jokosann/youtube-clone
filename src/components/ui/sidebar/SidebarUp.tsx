import { useState } from 'react';
import { useStore } from '../../../lib/zustand';
import { cn } from '../../../utils/cn';
import { listSidebarUp } from '../../../data/list-sidebar-up';

import YourChannel from '../svg/YourChannel';
import History from '../svg/History';
import Playlists from '../svg/Playlists';
import YourVideos from '../svg/YourVideos';
import WatchLater from '../svg/WatchLater';
import LikedVideos from '../svg/LikedVideos';
import Home from '../svg/Home';
import Shorts from '../svg/Shorts';
import Subscriptions from '../svg/Subscriptions';
import YoutubeLogo from '../svg/YoutubeLogo';
import HambergerMenu from '../svg/HambergerMenu';
import Arrows from '../svg/Arrows';
import Trending from '../svg/Trending';
import Music from '../svg/Music';
import Films from '../svg/Films';
import Gaming from '../svg/Gaming';
import News from '../svg/News';
import Sport from '../svg/Sport';
import YoutubePremium from '../svg/YtPremium';
import YoutubeStudio from '../svg/YtStudio';
import YoutubeMusic from '../svg/YtMusic';
import YoutubeKids from '../svg/YtKids';
import Settings from '../svg/Settings';
import Report from '../svg/Report';
import Help from '../svg/Help';
import Feedback from '../svg/Feedback';

const SidebarUp = () => {
  const [sidebarUpActive, setSidebarUpActive] = useState('home');
  const { sidebarActive, setSidebarActive } = useStore();

  return (
    <aside
      className={cn(
        'fixed top-0 xl:top-[3.8rem] -left-[240px] z-30 w-[240px] h-screen xl:h-[calc(100vh-3.8rem)] overflow-hidden bg-white pl-2 pt-2 transition-all xl:transition-none',
        {
          'left-0 xl:left-0': sidebarActive,
        }
      )}
      role="complementary"
      aria-label="Sidebar"
    >
      {/* LOGO */}
      <div className="w-full absolute flex items-center gap-4 px-2 bg-white z-40 xl:hidden">
        <div
          onClick={setSidebarActive}
          className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100"
        >
          <HambergerMenu className="w-10 aspect-square" />
        </div>

        <div className="logo">
          <YoutubeLogo className="w-[90px] h-5" />
        </div>
      </div>

      <div className="w-full h-full overflow-y-auto scroll-side-container bg-white pt-[60px] xl:pt-0">
        <div className="scroll-side-inner pr-2">
          <div className="px-1 pb-3 border-b border-b-gray-500/30">
            {listSidebarUp.main.map((item, i) => (
              <div
                key={i}
                onClick={() => setSidebarUpActive(item)}
                className={cn(
                  'flex items-center gap-6 pl-3 mr-2 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer',
                  { 'bg-[#f2f2f2]': sidebarUpActive === item }
                )}
              >
                {item === 'home' && (
                  <Home active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'shorts' && (
                  <Shorts active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'subscriptions' && (
                  <Subscriptions active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}

                <span
                  className={cn('capitalize text-sm', {
                    'font-medium': sidebarUpActive === item,
                  })}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* YOU */}
          <div className="mt-3 pb-3 border-b border-b-gray-500/30">
            <div
              className={cn(
                'flex items-center gap-2 px-3 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer'
              )}
            >
              <p className="font-medium ml-1">You</p> <Arrows />
            </div>
            {listSidebarUp.you.map((item, i) => (
              <div
                key={i}
                onClick={() => setSidebarUpActive(item)}
                className={cn(
                  'flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer',
                  { 'bg-[#f2f2f2]': sidebarUpActive === item }
                )}
              >
                {item === 'your channel' && <YourChannel className={cn('w-6 aspect-square')} />}
                {item === 'history' && <History className={cn('w-6 aspect-square')} />}
                {item === 'playlists' && <Playlists className={cn('w-6 aspect-square')} />}
                {item === 'your videos' && <YourVideos className={cn('w-6 aspect-square')} />}
                {item === 'watch later' && (
                  <WatchLater active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'liked videos' && (
                  <LikedVideos active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                <span
                  className={cn('capitalize text-sm', {
                    'font-medium': sidebarUpActive === item,
                  })}
                >
                  {item}
                </span>
              </div>
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
                className={cn(
                  'flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer'
                )}
              >
                <img src={item.image} alt={`user ${i + 1}`} className="w-6 aspect-square rounded-full" />
                <span className="truncate text-sm">{item.name}</span>
              </div>
            ))}
            <div
              className={cn(
                'flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer'
              )}
            >
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
              <div
                key={i}
                onClick={() => setSidebarUpActive(item)}
                className={cn(
                  'flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer',
                  { 'bg-[#f2f2f2]': sidebarUpActive === item }
                )}
              >
                {item === 'trending' && (
                  <Trending active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'music' && (
                  <Music active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'films' && (
                  <Films active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'gaming' && (
                  <Gaming active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'news' && (
                  <News active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}
                {item === 'sport' && (
                  <Sport active={sidebarUpActive === item} className={cn('w-6 aspect-square')} />
                )}

                <span
                  className={cn('capitalize text-sm', {
                    'font-medium': sidebarUpActive === item,
                  })}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* MORE */}
          <div className="pb-3 border-b border-b-gray-500/30">
            <div className="flex items-center gap-2 px-3 pt-4 pb-1">
              <p className="font-medium ml-1">More from Youtube</p>
            </div>
            {listSidebarUp.more.map((item, i) => (
              <div
                key={i}
                onClick={() => setSidebarUpActive(item)}
                className={cn(
                  'flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer',
                  { 'bg-[#f2f2f2]': sidebarUpActive === item }
                )}
              >
                {item === 'youtube premium' && <YoutubePremium className={cn('w-6 aspect-square')} />}
                {item === 'youtube studio' && <YoutubeStudio className={cn('w-6 aspect-square')} />}
                {item === 'youtube music' && <YoutubeMusic className={cn('w-6 aspect-square')} />}
                {item === 'youtube kids' && <YoutubeKids className={cn('w-6 aspect-square')} />}

                <span
                  className={cn('capitalize text-sm', {
                    'font-medium': sidebarUpActive === item,
                  })}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* SETTINGS */}
          <div className="pb-3 border-b border-b-gray-500/30 pt-4">
            {listSidebarUp.service.map((item, i) => (
              <div
                key={i}
                onClick={() => setSidebarUpActive(item)}
                className={cn(
                  'flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer',
                  { 'bg-[#f2f2f2]': sidebarUpActive === item }
                )}
              >
                {item === 'settings' && <Settings className={cn('w-6 aspect-square')} />}
                {item === 'report history' && <Report className={cn('w-6 aspect-square')} />}
                {item === 'help' && <Help className={cn('w-6 aspect-square')} />}
                {item === 'send feedback' && <Feedback className={cn('w-6 aspect-square')} />}

                <span
                  className={cn('capitalize text-sm', {
                    'font-medium': sidebarUpActive === item,
                  })}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </aside>
  );
};

export default SidebarUp;
