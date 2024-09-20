import { cn } from '@/utils/cn';
import { forwardRef, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

import { IoMdMic } from 'react-icons/io';
import SearchSvg from '@/components/ui/svg/SearchSvg';
import { Button } from '@/components/ui/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

type IProps = {
  state: {
    searchActive: boolean;
    setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Search = forwardRef<HTMLInputElement, IProps>(({ state }, ref) => {
  const { searchActive, setSearchActive } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = () => {
    if (searchQuery.trim() === '') {
      return alert('Masuukan kalimat yang benar.');
    }
    setSearchParams({ q: searchQuery });

    navigate(`/result?q=${encodeURIComponent(searchQuery)}`, { replace: true });
  };

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  return (
    <div
      className={cn('max-w-[650px] hidden md:flex flex-grow gap-4', {
        'flex max-w-full mx-auto': searchActive,
      })}
    >
      <div
        onClick={() => setSearchActive(!searchActive)}
        className="w-10 aspect-square rounded-full overflow-hidden grid place-content-center md:hidden cursor-pointer hover:bg-gray-100"
      >
        <FaArrowLeft className="text-xl" />
      </div>

      <div className="flex flex-grow border border-slate-500/50 rounded-full overflow-hidden">
        <input
          ref={ref}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') handleSearchQuery();
          }}
          value={searchQuery}
          type="search"
          name="search"
          placeholder="Search"
          className="w-full h-full border-r rounded-l-full border-slate-500/50 outline-none focus:border focus:border-blue-500/80 px-4"
        />
        <div onClick={() => handleSearchQuery()} className="center bg-secondary px-5 cursor-pointer">
          <SearchSvg />
        </div>
      </div>

      <Button type="button" variant="secondary" size="icon" className="flex-shrink-0">
        <IoMdMic size={22} />
      </Button>
    </div>
  );
});

export default Search;
