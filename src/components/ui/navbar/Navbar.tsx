import { useEffect, useRef, useState } from 'react';
// import Button from '../Button';
import { navbarFilter } from '../../../data/filter-navbar';
import { cn } from '../../../utils/cn';
import { useStore } from '../../../lib/zustand';

import { CiSearch } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa6';

import VoiceSearch from '/images/voice-search.png';
import HambergerMenu from '../svg/HambergerMenu';
import YoutubeLogo from '../svg/YoutubeLogo';
import Upload from '../svg/Upload';
import Notifications from '../svg/Notifications';
import Arrows from '../svg/Arrows';
import UserProfile from './UserProfile';
import { Button } from '../Button';

const Navbar = () => {
  const { sidebarActive, setSidebarActive } = useStore();

  const inputSearchRef = useRef<HTMLInputElement | null>(null);
  const navFilterRef = useRef<HTMLDivElement | null>(null);
  const navFilterParentRef = useRef<HTMLDivElement | null>(null);

  const [navFilter, setNavFilter] = useState('all');
  const [searchActive, setSeachactive] = useState(false);
  const [arrowFilterRight, setArrorFilterRight] = useState(true);
  const [arrowFilterLeft, setArrorFilterLeft] = useState(false);

  useEffect(() => {
    if (inputSearchRef.current && searchActive) inputSearchRef.current.focus();
  }, [searchActive]);

  useEffect(() => {
    const item = navFilterRef.current;
    const itemParent = navFilterParentRef.current;

    if (item && itemParent) {
      const handleScroll = () => {
        const calcScroll = Math.floor(item.scrollWidth) - (Math.floor(item.offsetWidth) + 10);
        const scroll = Math.floor(item.scrollLeft);

        // console.log({
        //   scroll,
        //   calcScroll,
        // });

        if (scroll > 0 && scroll < calcScroll) {
          setArrorFilterLeft(true);
          setArrorFilterRight(true);
        } else if (scroll === 0) {
          setArrorFilterLeft(false);
          setArrorFilterRight(true);
        } else if (scroll > calcScroll) {
          setArrorFilterRight(false);
        }
      };

      item.addEventListener('scroll', handleScroll);

      return () => item.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // console.log(navFilterRef.current  ?.scrollWidth);

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
          className={cn('max-w-3xl w-full hidden md:flex gap-4 md:px-8 xl:px-16', {
            'absolute md:relative top-0 left-0 right-0 flex gap-2 bg-white p-2 md:p-0': searchActive,
          })}
        >
          <div
            onClick={() => setSeachactive(!searchActive)}
            className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center md:hidden cursor-pointer hover:bg-gray-100"
          >
            <FaArrowLeft className="text-xl" />
          </div>

          <div
            className={cn('w-full mx-auto flex border border-slate-500/50 rounded-full overflow-hidden')}
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

          <div className="w-11 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer bg-gray-100">
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

          <div className="flex items-center sm:gap-2 md:gap-3">
            <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
              <Upload className="w-10 aspect-square" />
            </div>

            <div className="hidden w-10 aspect-square rounded-full overflow-hidden xs:grid place-content-center cursor-pointer hover:bg-gray-100">
              <Notifications active={false} className="w-10 aspect-square" />
            </div>

            <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center">
              <UserProfile />
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={navFilterParentRef}
        className={cn('relative flex items-center -mt-2 px-2 md:ml-20', {
          'xl:ml-[240px]': sidebarActive,
        })}
      >
        {arrowFilterLeft && (
          <div className="absolute top-0 left-0 flex justify-center items-center w-8 h-[60px] bg-white z-30">
            <div className=" absolute top-1/2 -translate-y-1/2 -left-3 w-12 aspect-square rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:bg-gray-100">
              <Arrows className="scale-125 rotate-180" />
            </div>
          </div>
        )}

        <div
          ref={navFilterRef}
          className={cn(
            'w-full scroll-fillter-container overflow-x-auto mt-3',
            {
              'mask-left': arrowFilterLeft && !arrowFilterRight,
            },
            {
              'mask-right': arrowFilterRight && !arrowFilterLeft,
            },
            {
              mask: arrowFilterRight && arrowFilterLeft,
            }
          )}
        >
          <div className="flex gap-3">
            {navbarFilter.map((item: string, index: number) => (
              <Button
                variant="secondary"
                size="sm"
                key={index}
                onClick={() => setNavFilter(item)}
                className={cn('rounded-lg capitalize whitespace-nowrap snap-end', {
                  'bg-black text-white': navFilter === item,
                })}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        {arrowFilterRight && (
          <div className="absolute top-0 right-0 flex justify-center items-center w-8 h-[60px] bg-white z-30">
            <div className=" absolute top-1/2 -translate-y-1/2 -right-3 w-12 aspect-square rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:bg-gray-100">
              <Arrows className="scale-125" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
