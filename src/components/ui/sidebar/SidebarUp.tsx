import { useState } from 'react';
import { useStore } from '../../../libs/zustand';
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

const SidebarUp = () => {
  const { sidebarActive, setSidebarActive } = useStore();
  const [sidebarUpActive, setSidebarUpActive] = useState('home');

  return (
    <aside
      className={cn(
        'fixed top-0 xl:top-[3.8rem] -left-[240px] z-30 w-[240px] max-h-screen bg-white p-2 transition-all xl:transition-none',
        {
          'left-0 xl:left-0': sidebarActive,
        }
      )}
      role="complementary"
      aria-label="Sidebar"
    >
      <div className="flex items-center gap-5 xl:hidden">
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
      <div className="w-full h-screen overflow-y-auto scroll-container">
        <div className="px-1 pb-3 border-b border-b-gray-500/30">
          {listSidebarUp.main.map((item: string, i: number) => (
            <div
              key={i}
              onClick={() => setSidebarUpActive(item)}
              className={cn(
                'flex items-center gap-6 px-3 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer',
                {
                  'bg-[#f2f2f2]': sidebarUpActive === item,
                }
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

        <div className="mt-3">
          <div
            className={cn(
              'flex items-center gap-2 px-3 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer'
            )}
          >
            <p className="font-medium ml-1">You</p> <Arrows />
          </div>
          {listSidebarUp.you.map((item: string, i: number) => (
            <div
              key={i}
              onClick={() => setSidebarUpActive(item)}
              className={cn(
                'flex items-center gap-6 px-4 py-2 hover:bg-[#f2f2f2] rounded-lg cursor-pointer',
                {
                  'bg-[#f2f2f2]': sidebarUpActive === item,
                }
              )}
            >
              {item === 'your channel' && (
                <YourChannel
                  className={cn('w-6 aspect-square', {
                    'fill-black': sidebarUpActive === item,
                  })}
                />
              )}
              {item === 'history' && (
                <History
                  className={cn('w-6 aspect-square', {
                    'fill-black': sidebarUpActive === item,
                  })}
                />
              )}
              {item === 'playlists' && (
                <Playlists
                  className={cn('w-6 aspect-square', {
                    'fill-black': sidebarUpActive === item,
                  })}
                />
              )}
              {item === 'your videos' && (
                <YourVideos
                  className={cn('w-6 aspect-square', {
                    'fill-black': sidebarUpActive === item,
                  })}
                />
              )}
              {item === 'watch later' && (
                <WatchLater
                  className={cn('w-6 aspect-square', {
                    'fill-black': sidebarUpActive === item,
                  })}
                />
              )}
              {item === 'liked videos' && (
                <LikedVideos
                  active={sidebarUpActive === item}
                  className={cn('w-6 aspect-square', {
                    'fill-inherit': sidebarUpActive === item,
                  })}
                />
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
        <div>
          {listSidebarUp.subscriptions.map((item: string, i: number) => (
            <div key={i}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div>
          {listSidebarUp.explore.map((item: string, i: number) => (
            <div key={i}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div>
          {listSidebarUp.more.map((item: string, i: number) => (
            <div key={i}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div>
          {listSidebarUp.service.map((item: string, i: number) => (
            <div key={i}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarUp;
