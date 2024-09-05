import { useState } from 'react';
import { listSidebarDown } from '../../../data/constants.tsx';

import SidebarDownMenuGroub from './_components/SidebarDownMenuGroub.tsx';
import { ISidebarDownMenuGroub } from '@/types/index.ts';

const SidebarDown = () => {
  const [sideActive, setSideActive] = useState('Home');

  return (
    <aside
      className="hidden fixed z-10 top-16 left-0 w-[70px] h-[calc(100vh - 64px)] md:flex flex-col gap-2 px-1 bg-white"
      role="complementary"
      aria-label="Sidebar"
    >
      {listSidebarDown.map((item: ISidebarDownMenuGroub) => (
        <SidebarDownMenuGroub key={item.name} data={item} state={{ sideActive, setSideActive }} />
      ))}
    </aside>
  );
};

export default SidebarDown;
