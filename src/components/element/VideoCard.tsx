import { EllipsisVertical } from 'lucide-react';
import { Button } from '../ui/Button';
import { DataVideoYoutube } from '@/types/video';
import { formatViewCount } from '@/utils/formatViewCount';
import { formatPublishTime } from '@/utils/formatPublishTime';
import { useFetchApi } from '@/hooks/useFetchApi';
import { Link, useNavigate } from 'react-router-dom';
import { Channel } from '@/types/channel';
import { formatDuration } from '@/utils/formatDuration';
import useSidebarStore from '@/store/useSidebarStore';

const VideoCard = ({ video }: { video: DataVideoYoutube }) => {
  const { sidebarActive, setSidebarActive } = useSidebarStore();
  const navigate = useNavigate();

  const { data } = useFetchApi<Channel>('/channels', {
    part: 'snippet,contentDetails,statistics',
    id: video?.snippet?.channelId,
  });

  const channel: Channel | null = data && data[0];

  return (
    <div className="w-full h-full cursor-pointer">
      <div
        onClick={() => {
          if (typeof setSidebarActive === 'function' && sidebarActive) setSidebarActive();
          navigate(`/detail?v=${video?.id}&cat=${video?.snippet?.categoryId}`);
        }}
        className="relative w-full aspect-[2/1.15] rounded-xl overflow-hidden z-0"
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video?.snippet?.channelTitle}
          className="w-full h-full object-cover"
        />
        <div className="bg-black/60 absolute bottom-1 right-1 text-white text-xs font-medium px-1.5 py-1 rounded-md">
          {formatDuration(video?.contentDetails?.duration)}
        </div>
      </div>

      <div className="flex gap-3 py-3">
        <Link
          to={`/channel?u=${channel?.snippet?.customUrl}`}
          className="w-9 flex-shrink-0 overflow-hidden mt-1"
        >
          <img
            src={channel?.snippet?.thumbnails?.medium?.url}
            alt={channel?.snippet?.title}
            className="w-full aspect-square rounded-full object-cover"
          />
        </Link>
        <div className="max-w-full w-full">
          <p className="line-clamp-2 mb-0.5 text-base font-medium">{video?.snippet?.title}</p>

          <Link to={`/channel?u=${channel?.snippet?.customUrl}`} className="text-sm text-gray-600">
            {video?.snippet?.channelTitle}
          </Link>

          <div className="text-sm flex items-center gap-[6px] text-gray-600">
            <p>{formatViewCount(Number(video?.statistics?.viewCount))} views</p>
            <div className="w-[3px] aspect-square rounded-full bg-gray-600" />
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

export default VideoCard;
