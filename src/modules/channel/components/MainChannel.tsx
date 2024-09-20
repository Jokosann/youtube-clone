import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { useState, useCallback } from 'react';
import Profile from '/images/user_profile.jpg';
import { formatViewCount } from '@/utils/formatViewCount';
import { categoryChannel } from '@/data/constants';
import { cn } from '@/utils/cn';
import ChannelVideo from './ChannelVideo';
import useMediaQuery from '@/hooks/useMediaQuery';
import CategoryPills from '@/components/element/CategoryPills';
import { useFetchChannelData } from '../services/useFetchDataChannelPage';

// Constants for filtering videos
const filterVideoChannel = ['latest', 'popular', 'oldest'];

const MainChannel = ({ username }: { username: string | undefined }) => {
  const { channel, videoChannel, loading, error } = useFetchChannelData(username);
  const [categoryActive, setCategoryActive] = useState<string>('videos');
  const [filterActive, setFilterActive] = useState<string>('latest');
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleFilterChange = useCallback((filter: string) => {
    setFilterActive(filter);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-16 md:px-14">
      <div className="container xl:max-w-screen-xl w-full mx-auto">
        {/* Sampul Channel */}
        <div className="w-full aspect-[6/1.4] md:h-[172px] rounded-xl overflow-hidden mb-5">
          <Image
            src={channel?.snippet?.thumbnails?.medium?.url || Profile}
            alt="Sampul channel"
            width="100%"
            height="100%"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Profil Channel */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Gambar Profil */}
          <div className="flex-shrink-0">
            <Image
              src={channel?.snippet?.thumbnails?.medium?.url || Profile}
              alt="Profile channel"
              className="w-[72px] sm:w-[120px] md:w-[160px] aspect-square rounded-full"
            />
          </div>

          {/* Informasi Channel */}
          <div>
            <p className="text-2xl sm:text-4xl font-bold line-clamp-2 mb-1">{channel?.snippet?.title}</p>

            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <p className="text-xs text-gray-600">{channel?.snippet?.customUrl}</p>
              <p className="text-xs text-gray-600">
                {formatViewCount(Number(channel?.statistics?.subscriberCount))} subscribers
              </p>
              <p className="text-xs text-gray-600">
                {formatViewCount(Number(channel?.statistics?.videoCount))} videos
              </p>
            </div>

            <p className="relative text-xs mb-2 line-clamp-1">
              {channel?.snippet?.description}
              <span className="absolute top-0 right-0 w-20 text-right cursor-pointer font-medium bg-gradient-to-l from-white to-transparent">
                ...more
              </span>
            </p>

            <Button className="w-full md:w-fit rounded-full">Subscribe</Button>
          </div>
        </div>

        {/* Kategori Channel */}
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

        {/* Filter Video */}
        <div className="flex gap-4 my-4">
          {filterVideoChannel.map((item) => (
            <Button
              onClick={() => handleFilterChange(item)}
              size="sm"
              variant={filterActive === item ? 'default' : 'secondary'}
              key={item}
              className="capitalize"
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Video Channel */}
        <div className={cn('space-y-2', { 'grid-video-channel gap-4 space-y-0': isDesktop })}>
          {videoChannel?.map((video, i) => (
            <ChannelVideo key={i} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainChannel;
