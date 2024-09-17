import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { Channel } from '@/types/channel';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Profile from '/images/user_profile.jpg';
import { formatViewCount } from '@/utils/formatViewCount';
import CategoryPills from '@/components/element/CategoryPills';
import { categoryChannel } from '@/data/constants';
import { cn } from '@/utils/cn';
import SearchSvg from '@/components/ui/svg/SearchSvg';

const MainChannelPage = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('u') || '';

  const [channel, setChannel] = useState<Channel | null>(null);
  // const inputRef = useRef<HTMLInputElement | null>(null);
  // const wrapperRef = useRef<HTMLDivElement | null>(null);
  // const [inputFocus, setInputFocus] = useState(false);
  // const [searchActive, setSearchActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState('home');

  useEffect(() => {
    const fetchChannelDetail = async () => {
      try {
        const response = await fetchApiFromYoutubeData('/channels', {
          part: 'snippet,contentDetails,statistics,topicDetails',
          forHandle: username,
        });

        setChannel(response?.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChannelDetail();
  }, [username]);

  // Handle click outside search
  // useEffect(() => {
  //   if (inputRef.current && searchActive) {
  //     inputRef.current.focus();
  //   }

  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
  //       setSearchActive(false);
  //       setInputFocus(false);
  //     } else {
  //       if (inputRef.current && searchActive) {
  //         inputRef.current.focus();
  //         setInputFocus(true);
  //       }
  //       setSearchActive(true);
  //     }
  //   };

  //   window.addEventListener('click', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, [searchActive]);

  // console.log(searchActive);

  return (
    <div className="mt-20 mb-[1000px]">
      <div className="container xl:max-w-screen-xl w-full mx-auto">
        {/* sampul */}
        <div className="w-full aspect-[6/1.4] md:h-[172px] rounded-xl overflow-hidden mb-4">
          <Image
            src={channel ? channel?.snippet?.thumbnails?.medium?.url : Profile}
            alt="Sampul channel"
            width="100%"
            height="100%"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* profile */}
        <div>
          {/* image */}
          <div className="float-left mr-4 md:mt-2">
            <Image
              src={channel ? channel?.snippet?.thumbnails?.medium?.url : Profile}
              alt="Profile channel"
              className="w-[72px] sm:w-[120px] md:w-[160px] aspect-square rounded-full"
            />
          </div>
          {/* info */}
          <div>
            <p className="text-2xl sm:text-4xl font-bold line-clamp-2 mb-1 sm:mb-1.5">
              {channel?.snippet?.title}
            </p>

            <div className="flex flex-col xs:flex-row gap-1 mb-1.5">
              <p className="text-xs text-gray-600">{channel?.snippet?.customUrl}</p>

              <div className="flex items-center gap-1 line-clamp-1 text-gray-600 mb-1.5">
                <div className="hidden xs:block w-[3px] aspect-square rounded-full bg-gray-600" />
                <p className="text-xs whitespace-nowrap">
                  {formatViewCount(Number(channel?.statistics?.subscriberCount))} subcribers
                </p>
                <div className="w-[3px] aspect-square rounded-full bg-gray-600" />
                <p className="text-xs whitespace-nowrap">
                  {formatViewCount(Number(channel?.statistics?.videoCount))} videos
                </p>
              </div>
            </div>

            <p className="text-xs mb-2 line-clamp-1">{channel?.snippet?.description}</p>
            <p className="text-xs text-blue-500 mb-4 md:mb-3">https://saweria.co/username</p>

            <Button className="w-full md:w-fit rounded-full">
              {/* <SubscribeBell/> */}
              Subscribe
            </Button>
          </div>
        </div>

        {/* category */}
        <div className="border-b border-black/20 mt-4">
          <CategoryPills>
            {categoryChannel.map((item: string, index: number) => (
              <div
                key={index}
                onClick={() => setCategoryActive(item)}
                className="relative capitalize cursor-pointer font-medium whitespace-nowrap snap-end py-2 mr-4"
              >
                <span
                  className={cn('py-2 category-channel text-gray-600', {
                    'text-black active': categoryActive === item,
                  })}
                >
                  {item}
                </span>
              </div>
            ))}

            {/* bug */}
            {/* <div className="flex items-center" ref={wrapperRef}>
              <Button ref={searchRef} variant="ghost" size="icon">
                <SearchSvg className="text-gray-600" />
              </Button>
              {searchActive && (
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    name="comment"
                    placeholder="Search"
                    className="outline-none w-full pb-1.5 text-sm placeholder:text-gray-600 placeholder:text-sm"
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                  />
                  <div
                    className={cn(
                      'absolute -bottom-[1px] left-0 right-0 h-0.5 bg-black scale-0 transition-scale transition-transform',
                      { 'scale-100': inputFocus }
                    )}
                  />
                </div>
              )}
            </div> */}
          </CategoryPills>
        </div>
      </div>
    </div>
  );
};

export default MainChannelPage;
