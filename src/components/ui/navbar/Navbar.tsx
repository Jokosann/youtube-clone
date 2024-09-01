import { RxHamburgerMenu } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

import LogoYt from '/images/yt-logo.png';
import Profile from '/images/profile.png';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 right-0 p-2 flex flex-col">
      <div className="flex items-center justify-between w-full mb-3">
        <div className="flex items-center gap-5">
          <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
            <RxHamburgerMenu className="text-2xl" />
          </div>

          <div className="w-[5.5rem]">
            <img src={LogoYt} alt="Logo Youtube" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
            <CiSearch className="text-2xl cursor-pointer" />
          </div>
          <div className="flex items-center">
            <div className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center cursor-pointer hover:bg-gray-100">
              <AiOutlineVideoCameraAdd className="text-xl" />
            </div>
            <button className="w-[60px] grid place-content-center">
              <img src={Profile} alt="Profile" className="w-8 aspect-square rounded-full" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-3">
        <div className="w-[90%] overflow-x-auto p-2 mask">
          <div className="w-fit flex gap-3">
            <Button className="w-fit bg-black text-white">All</Button>
            <Button className="w-fit">Javascript</Button>
            <Button className="w-fit">NextJS</Button>
            <Button className="w-fit">VueJS</Button>
            <Button className="w-fit">PHP</Button>
            <Button className="w-fit">Angular</Button>
            <Button className="w-fit">Pyton</Button>
            <Button className="w-fit">C##</Button>
            <Button className="w-fit">Ruby</Button>
            <Button className="w-fit">Pascal</Button>
          </div>
        </div>
        <IoIosArrowForward className="text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
