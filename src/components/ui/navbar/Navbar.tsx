import { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import { navbarFilter } from '../../../data/filter-navbar';
import { cn } from '../../../utils/cn';
import { useStore } from '../../../libs/zustand';

import { CiSearch } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa6';

import Jack from '/images/jack.png';
import VoiceSearch from '/images/voice-search.png';
import HambergerMenu from '../svg/HambergerMenu';
import YoutubeLogo from '../svg/YoutubeLogo';
import Upload from '../svg/Upload';
import Notifications from '../svg/Notifications';
import Arrows from '../svg/Arrows';

const Navbar = () => {
  const { sidebarActive, setSidebarActive } = useStore();

  const [navFilter, setNavFilter] = useState('all');
  const [searchActive, setSeachactive] = useState(false);
  const inputSearchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputSearchRef.current && searchActive) inputSearchRef.current.focus();
  }, [searchActive]);

  return (
    <header className="fixed w-full top-0 left-0 right-0 p-2 md:px-4 flex flex-col bg-white">
      <nav className="flex items-center justify-between w-full gap-4 mb-3">
        <div className="flex items-center gap-4">
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

        {/* search */}
        <div
          className={cn('max-w-3xl w-full hidden md:flex gap-4 md:px-8 xl:px-16 md:relative', {
            'absolute md:relative top-0 left-0 right-0 flex gap-4 bg-white p-2 md:p-0': searchActive,
          })}
        >
          <div
            onClick={() => setSeachactive(!searchActive)}
            className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center md:hidden cursor-pointer hover:bg-gray-100"
          >
            <FaArrowLeft className="text-xl" />
          </div>

          <div
            className={cn(
              'max-w-3xl w-full mx-auto flex border border-slate-500/50 rounded-full overflow-hidden'
            )}
          >
            <input
              ref={inputSearchRef}
              type="search"
              name="search"
              placeholder="Search"
              className="w-[85%] lg:w-[90%] h-full border-r rounded-l-full border-slate-500/50 outline-none focus:border focus:border-blue-500/80 px-4 py-2"
            />
            <button className="w-[15%] lg:w-[10%] h-full flex justify-center items-center bg-gray-100">
              <CiSearch className="text-2xl" />
            </button>
          </div>
          <div className="hidden w-11 aspect-square rounded-full overflow-hidden xs:grid place-content-center cursor-pointer bg-gray-100">
            <img src={VoiceSearch} alt="Upload Youtube" className="w-[14px]" />
          </div>
        </div>

        <div className="flex items-center sm:gap-1">
          <div
            onClick={() => {
              setSeachactive(!searchActive);
            }}
            className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center md:hidden cursor-pointer hover:bg-gray-100"
          >
            <CiSearch className="text-2xl cursor-pointer" />
          </div>

          <div className="hidden w-10 aspect-square rounded-full overflow-hidden xs:grid place-content-center md:hidden cursor-pointer hover:bg-gray-100">
            <img src={VoiceSearch} alt="Upload Youtube" className="w-[14px]" />
          </div>

          <div className="flex items-center sm:gap-1 md:gap-2">
            <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
              <Upload className="w-10 aspect-square" />
            </div>

            <div className="hidden w-10 aspect-square rounded-full overflow-hidden xs:grid place-content-center cursor-pointer hover:bg-gray-100">
              <Notifications active={false} className="w-10 aspect-square" />
            </div>

            <button className="w-[60px] grid place-content-center">
              <img src={Jack} alt="Profile" className="w-8 aspect-square rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full flex items-center -mt-3">
        <div
          className={cn('w-full md:pl-20 scroll-container overflow-x-auto mask mt-5', {
            'xl:pl-[240px]': sidebarActive,
          })}
        >
          <div className="flex gap-3">
            {navbarFilter.map((item: string, index: number) => (
              <Button
                key={index}
                onClick={() => setNavFilter(item)}
                className={cn('w-fit capitalize whitespace-nowrap snap-end', {
                  'bg-black text-white': navFilter === item,
                })}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
          <Arrows className="scale-125" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
