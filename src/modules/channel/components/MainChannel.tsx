import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { Channel } from '@/types/channel';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { useEffect, useState } from 'react';

import Profile from '/images/user_profile.jpg';
import { formatViewCount } from '@/utils/formatViewCount';
import CategoryPills from '@/components/element/CategoryPills';
import { categoryChannel } from '@/data/constants';
import { cn } from '@/utils/cn';
import ChannelVideo from './ChannelVideo';
import { DataVideoYoutube } from '@/types/video';
import useMediaQuery from '@/hooks/useMediaQuery';

const filterVideoChannel = ['latest', 'popular', 'oldest'];

const MainChannel = ({ username }: { username: string | undefined }) => {
  const [channel, setChannel] = useState<Channel | null>(null);
  const [videoChannel, setVideoChannel] = useState<DataVideoYoutube[] | null>(null);
  const [categoryActive, setCategoryActive] = useState('videos');
  const [filterActive, setFilterActive] = useState('latest');

  const channelId = channel?.id;

  const isDekstop = useMediaQuery('(min-width: 768px)');

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

  useEffect(() => {
    const fetchVideoChannel = async () => {
      if (!channelId) return;

      try {
        const response = await fetchApiFromYoutubeData('/search', {
          part: 'snippet',
          channelId: channelId,
          maxResults: 10,
          chart: 'mostPopular',
          type: 'video',
        });

        setVideoChannel(response?.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideoChannel();
  }, [channelId]);

  // console.log({ videoChannel, channel, channelId });

  return (
    <div className="mt-16 md:px-14">
      <div className="container xl:max-w-screen-xl w-full mx-auto">
        {/* sampul */}
        <div className="w-full aspect-[6/1.4] md:h-[172px] rounded-xl overflow-hidden mb-5">
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

            <p className="relative text-xs mb-2 line-clamp-1 w-fit max-w-64">
              {channel?.snippet?.description}
              <span className="absolute top-0 right-0 w-20 text-right cursor-pointer test-xs font-medium bg-gradient-to-l from-white from-50% to-transparent">
                ...more
              </span>
            </p>

            <p className="relative text-xs line-clamp-1 text-blue-500 mb-4 md:mb-3 max-w-64">
              https://saweria.co/username
              <span className="absolute top-0 right-0 w-24 text-black text-left cursor-pointer test-xs font-medium bg-gradient-to-l from-white from-80% to-transparent whitespace-nowrap">
                and 2 more links
              </span>
            </p>

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
          </CategoryPills>
        </div>

        {/* filter */}
        <div className="flex gap-4 my-4">
          {filterVideoChannel.map((item: string) => (
            <Button
              onClick={() => setFilterActive(item)}
              size="sm"
              variant={filterActive === item ? 'default' : 'secondary'}
              key={item}
              className="capitalize"
            >
              {item}
            </Button>
          ))}
        </div>

        {/* video channel */}
        <div className={cn('space-y-2', { 'grid-video-channel gap-4 space-y-0': isDekstop })}>
          {videoChannel?.map((video: DataVideoYoutube, i: number) => (
            <ChannelVideo key={i} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainChannel;
