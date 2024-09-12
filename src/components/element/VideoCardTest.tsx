import { EllipsisVertical } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import useSidebarStore from '@/store/useSidebarStore';
import { VideoYoutubeTest } from '@/types/video-test';

const VideoCardTest = ({ video }: { video: VideoYoutubeTest }) => {
  const { sidebarActive, setSidebarActive } = useSidebarStore();
  const navigate = useNavigate();

  return (
    <div className="w-full h-full cursor-pointer">
      <div
        onClick={() => {
          if (typeof setSidebarActive === 'function' && sidebarActive) setSidebarActive();
          navigate(`/detail?v=${video.id}`);
        }}
        className="relative w-full aspect-[2/1.15] rounded-xl overflow-hidden z-0"
      >
        <img src={video.thumbnailUrl} alt={video.channel.name} className="w-full h-full object-cover" />
        <div className="bg-black/60 absolute bottom-1 right-1 text-white text-xs font-medium px-1.5 py-1 rounded-md">
          1:20:05
        </div>
      </div>

      <div className="flex gap-3 py-3">
        <Link
          to={`/channel?user=${video.channel.id}`}
          className="w-9 flex-shrink-0 overflow-hidden mt-1"
        >
          <img
            src={video.channel.profileUrl}
            alt={video.channel.id}
            className="w-full aspect-square rounded-full object-cover"
          />
        </Link>
        <div className="max-w-full w-full">
          <p className="line-clamp-2 mb-0.5 text-base font-medium">{video.title}</p>

          <Link to={`/channel?user=${video.channel.id}`} className="text-sm text-gray-600">
            {video.channel.name}
          </Link>

          <div className="text-sm flex items-center gap-[6px] text-gray-600">
            <p>1.5K views</p>
            <div className="w-[3px] aspect-square rounded-full bg-gray-600" />
            <p>2 days ago</p>
          </div>
        </div>

        <Button size="icon" variant="ghost" className="flex-shrink-0 -mr-2 -mt-2">
          <EllipsisVertical size={20} />
        </Button>
      </div>
    </div>
  );
};

export default VideoCardTest;
