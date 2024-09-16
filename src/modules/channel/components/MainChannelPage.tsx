import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { Channel } from '@/types/channel';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Profile from '/images/user_profile.jpg';
import { formatViewCount } from '@/utils/formatViewCount';

const MainChannelPage = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('u') || '';
  const [channel, setChannel] = useState<Channel | null>(null);

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

  console.log(channel);

  return (
    <div className="mt-20 mb-[1000px]">
      <div className="max-w-screen-xs xs:max-w-[515px] md:max-w-screen-lg w-full mx-auto">
        {/* sampul */}
        <div className="w-full aspect-[6/1.2] xs:aspect-[6/1.3] md:h-[172px] rounded-xl overflow-hidden mb-4">
          <Image
            src={channel ? channel?.snippet?.thumbnails?.medium?.url : Profile}
            alt="Sampul channel"
            width="100%"
            height="100%"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* profile */}
        <div className="">
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
      </div>
    </div>
  );
};

export default MainChannelPage;
