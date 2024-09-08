import { useEffect, useRef, useState } from 'react';
import useSidebarStore from '@/store/useSidebarStore';

import { CiSearch } from 'react-icons/ci';

import VoiceSearch from '/images/voice-search.png';
import HambergerMenu from '@/components/ui/svg/HambergerMenu';
import YoutubeLogo from '@/components/ui/svg/YoutubeLogo';
import Upload from '@/components/ui/svg/Upload';
import UserProfile from '@/components/layout/Navbar/UserProfile';
import NavbarFilter from '@/components/layout/Navbar/NavbarFilter';
import Search from '@/components/layout/Navbar/Search';
import UserNotification from '@/components/layout/Navbar/UserNotification';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@/hooks/useMediaQuery';

const Navbar = () => {
  const { setSidebarActive } = useSidebarStore();
  const isDekstop = useMediaQuery('(min-width: 768px)');

  const navigate = useNavigate();

  const inputSearchRef = useRef<HTMLInputElement | null>(null);
  const navFilterRef = useRef<HTMLDivElement | null>(null);

  const [navFilter, setNavFilter] = useState('all');
  const [searchActive, setSearchActive] = useState(false);
  const [arrowFilterRight, setArrorFilterRight] = useState(true);
  const [arrowFilterLeft, setArrorFilterLeft] = useState(false);

  useEffect(() => {
    if (inputSearchRef.current && searchActive) inputSearchRef.current.focus();
  }, [searchActive]);

  useEffect(() => {
    const item = navFilterRef.current;

    if (item) {
      const handleScroll = () => {
        const calcScroll = Math.floor(item.scrollWidth) - (Math.floor(item.offsetWidth) + 10);
        const scroll = Math.floor(item.scrollLeft);

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

  useEffect(() => {
    if (isDekstop) setSearchActive(false);
  }, [isDekstop]);

  return (
    <header className="fixed w-full top-0 left-0 right-0 p-2 md:px-4 flex flex-col bg-white">
      <nav className="flex items-center justify-between w-full gap-4 mb-3">
        <div className="flex items-center gap-4">
          <div
            onClick={() => {
              if (typeof setSidebarActive === 'function') setSidebarActive();
            }}
            className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100"
          >
            <HambergerMenu className="w-10 aspect-square" />
          </div>
          <div onClick={() => navigate('/')} className="logo cursor-pointer">
            <YoutubeLogo className="w-[90px] h-5" />
          </div>
        </div>
        <Search ref={inputSearchRef} state={{ searchActive, setSearchActive }} />
        <div className="flex items-center sm:gap-1">
          <div
            onClick={() => setSearchActive(!searchActive)}
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
            <UserNotification />
            <UserProfile />
          </div>
        </div>
      </nav>
      <NavbarFilter
        ref={navFilterRef}
        state={{ navFilter, setNavFilter, arrowFilterRight, arrowFilterLeft }}
      />
    </header>
  );
};

export default Navbar;
