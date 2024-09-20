import { EllipsisVertical } from 'lucide-react';
import { Button } from '../ui/Button';
import { DataVideoYoutube } from '@/types/video';
import { formatViewCount } from '@/utils/formatViewCount';
import { formatPublishTime } from '@/utils/formatPublishTime';
import { useFetchApi } from '@/hooks/useFetchApi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Channel } from '@/types/channel';
import { formatDuration } from '@/utils/formatDuration';
import Image from '@/components/ui/Image';
import Profile from '/images/user_profile.jpg';
import useSidebar from '@/store/useSidebarStore';

const VideoCard = ({ video }: { video: DataVideoYoutube }) => {
  const { sidebarActive, setSidebarActive } = useSidebar();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { dataFirst: channel } = useFetchApi<Channel>('/channels', {
    part: 'snippet,contentDetails,statistics',
    id: video?.snippet?.channelId,
  });

  const handleCLickDetailVideo = () => {
    if (typeof setSidebarActive === 'function' && sidebarActive) setSidebarActive();

    setSearchParams({ ...searchParams, v: video.id, cat: video.snippet.categoryId });
    navigate(
      `/watch?v=${encodeURIComponent(video.id)}&cat=${encodeURIComponent(video.snippet.categoryId)}`,
      { replace: true }
    );
  };

  const handleClickChannel = () => {
    if (typeof setSidebarActive === 'function' && sidebarActive) setSidebarActive();

    setSearchParams({ ...searchParams, u: channel?.snippet?.customUrl });
    navigate(`/${channel?.snippet?.customUrl}`, { replace: true });
  };

  return (
    <div className="w-full h-full cursor-pointer">
      <div
        onClick={handleCLickDetailVideo}
        className="relative w-full aspect-[2/1.15] rounded-xl overflow-hidden z-0"
      >
        <Image
          src={video?.snippet?.thumbnails?.medium?.url}
          alt={video?.snippet?.channelTitle}
          width="100%"
          height="100%"
          className="object-cover rounded-xl"
        />
        <div className="bg-black/60 absolute bottom-2 right-2 text-white text-xs font-medium px-1.5 py-1 rounded-md">
          {formatDuration(video?.contentDetails?.duration)}
        </div>
      </div>

      <div className="flex gap-3 py-3">
        <div onClick={handleClickChannel} className="w-9 flex-shrink-0 overflow-hidden mt-1">
          <Image
            src={channel ? channel?.snippet?.thumbnails?.medium?.url : Profile}
            alt={channel ? channel?.snippet?.title : 'profile'}
            width="100%"
            height="100%"
            className="rounded-full object-cover"
          />
        </div>
        <div className="max-w-full w-full">
          <p className="line-clamp-2 mb-0.5 text-base font-medium">{video?.snippet?.title}</p>

          <div onClick={handleClickChannel} className="text-sm text-gray-600">
            {video?.snippet?.channelTitle}
          </div>

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
