import { listSidebarFixed } from '../../../data/list-sidebar-fixed';

import { GoHomeFill } from 'react-icons/go';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdVideoLibrary } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { useState } from 'react';
import { cn } from '../../../utils/cn';

// import Home from '/images/home.png';
// import Subscriptions from '/images/subscriptions.png';
// import Library from '/images/library.png';

const SidebarDown = () => {
  const [sideActive, setSideActive] = useState('home');

  return (
    <aside
      className="hidden fixed top-16 left-0 w-[70px] h-custom-sidebar-fixed md:flex flex-col px-1"
      role="complementary"
      aria-label="Sidebar"
    >
      {listSidebarFixed.map((item: string, index: number) => (
        <div
          key={index}
          onClick={() => setSideActive(item)}
          className="flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 p-4 rounded-lg"
        >
          {item === 'home' && (
            <GoHomeFill
              className={cn('text-2xl text-[#7e7e7e]', {
                'text-black': sideActive === item,
              })}
            />
          )}
          {item === 'shorts' && (
            <SiYoutubeshorts
              className={cn('text-xl text-[#7e7e7e]', {
                'text-black': sideActive === item,
              })}
            />
          )}
          {item === 'subscriptions' && (
            <MdSubscriptions
              className={cn('text-2xl text-[#7e7e7e]', {
                'text-black': sideActive === item,
              })}
            />
          )}
          {item === 'you' && (
            <MdVideoLibrary
              className={cn('text-2xl text-[#7e7e7e]', {
                'text-black': sideActive === item,
              })}
            />
          )}
          <p className="text-[10px] capitalize">{item}</p>
        </div>
      ))}
    </aside>
  );
};

export default SidebarDown;
