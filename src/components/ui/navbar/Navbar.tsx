import { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import { navbarFilter } from '../../../data/filter-navbar';
import { cn } from '../../../utils/cn';

import { RxHamburgerMenu } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa6';

import LogoYt from '/images/yt-logo.png';
import Profile from '/images/user_profile.jpg';
import Upload from '/images/upload.png';
import Notif from '/images/notification.png';
import VoiceSearch from '/images/voice-search.png';

const Navbar = () => {
  const [navFilter, setNavFilter] = useState('all');
  const [searchActive, setSeachactive] = useState(false);
  const inputSearchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputSearchRef.current && searchActive) inputSearchRef.current.focus();
  }, [searchActive]);

  return (
    <header className="fixed w-full top-0 left-0 right-0 p-2 md:px-4 flex flex-col">
      <nav className="flex items-center justify-between w-full gap-4 mb-3">
        <div className="flex items-center gap-5">
          <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
            <RxHamburgerMenu className="text-2xl" />
          </div>

          <div className="w-[5.5rem]">
            <img src={LogoYt} alt="Logo Youtube" />
          </div>
        </div>

        {/* search */}
        <div
          className={cn('max-w-3xl w-full hidden md:flex gap-4 px-8', {
            'absolute top-0 left-0 right-0 flex gap-4 bg-white p-2': searchActive,
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
              <img src={Upload} alt="Upload Youtube" className="w-6" />
            </div>

            <div className="hidden w-10 aspect-square rounded-full overflow-hidden xs:grid place-content-center cursor-pointer hover:bg-gray-100">
              <img src={Notif} alt="Notif Youtube" className="w-6" />
            </div>

            <button className="w-[60px] grid place-content-center">
              <img src={Profile} alt="Profile" className="w-8 aspect-square rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full flex items-center justify-between gap-4">
        <div className="w-full overflow-x-auto p-2 mask pl-4">
          <div className="flex items-center gap-3">
            {navbarFilter.map((item: string, index: number) => (
              <Button
                key={index}
                onClick={() => setNavFilter(item)}
                className={cn('w-fit capitalize whitespace-nowrap', {
                  'bg-black text-white': navFilter === item,
                })}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-12 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
          <IoIosArrowForward className="text-xl ml-1" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
