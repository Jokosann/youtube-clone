import { EllipsisVertical } from 'lucide-react';
import { Button } from '../ui/Button';
import { DataVideoYoutube } from '@/types/video';
import { useEffect, useState } from 'react';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { formatViewCount } from '@/utils/formatViewCount';
import { formatPublishTime } from '@/utils/formatPublishTime';

const Card = ({ video }: { video: DataVideoYoutube }) => {
  const [channel, setChannel] = useState<DataVideoYoutube>({} as DataVideoYoutube);

  useEffect(() => {
    const fetchChannelData = async () => {
      const data = await fetchApiFromYoutubeData('/channels', {
        part: 'snippet,contentDetails,statistics',
        id: video?.snippet?.channelId,
      });
      setChannel(data?.items[0]);
    };

    fetchChannelData();
  }, [video]);

  return (
    <div className="w-full h-full cursor-pointer">
      <div className="relative w-full aspect-[2/1.15] rounded-xl overflow-hidden z-0">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video?.snippet?.channelTitle}
          className="w-full h-full object-cover"
        />

        <div className="bg-black/80 absolute bottom-1 right-1 text-white text-xs font-medium px-1.5 py-1 rounded-md">
          1:23:23
        </div>
      </div>

      <div className="flex gap-3 py-3">
        <div className="w-9 flex-shrink-0 overflow-hidden mt-1">
          <img
            src={channel?.snippet?.thumbnails?.medium?.url}
            alt={channel?.snippet?.channelTitle}
            className="w-full aspect-square rounded-full object-cover"
          />
        </div>
        <div className="max-w-full w-full">
          <p className="line-clamp-2 mb-0.5 text-base font-medium">{video?.snippet?.title}</p>
          <p className="text-sm text-gray-600">{video?.snippet?.channelTitle}</p>
          <div className="text-sm flex items-center gap-1 text-gray-600">
            <p>{formatViewCount(Number(video?.statistics?.viewCount))} views</p>
            <div className="w-[4px] aspect-square rounded-full bg-gray-600" />
            <p>{formatPublishTime(video?.snippet?.publishedAt)}</p>
          </div>
        </div>

        <Button size="icon" variant="ghost" className="flex-shrink-0 -mr-2 -mt-2">
          <EllipsisVertical size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Card;
