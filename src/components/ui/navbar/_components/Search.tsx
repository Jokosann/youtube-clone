import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa6';

import VoiceSearch from '/images/voice-search.png';

type IProps = {
  state: {
    searchActive: boolean;
    setSeachactive: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Search = forwardRef<HTMLInputElement, IProps>(({ state }: IProps, ref) => {
  const { searchActive, setSeachactive } = state;

  return (
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

      <div className={cn('w-full mx-auto flex border border-slate-500/50 rounded-full overflow-hidden')}>
        <input
          ref={ref}
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
  );
});

export default Search;
