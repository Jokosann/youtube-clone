import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { RelatedVideoType } from '@/types/related-video';
import { formatPublishTime } from '@/utils/formatPublishTime';
import { formatViewCount } from '@/utils/formatViewCount';
import { EllipsisVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RelatedVideo = ({ video }: { video: RelatedVideoType }) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full cursor-pointer">
      <div
        onClick={() => navigate(`/detail?v=${video.id}&cat=${video.snippet.categoryId}`)}
        className="w-[168px] h-[94px] overflow-hidden rounded-lg mr-2 flex-shrink-0"
      >
        <Image
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.channelTitle}
          width="100%"
          height="100%"
          className="rounded-lg"
        />
      </div>
      <div className="w-full flex-grow-1 text-gray-600">
        <p className="text-sm font-medium mb-1 line-clamp-2">{video.snippet.localized.title}</p>
        <p className="text-xs">{video.snippet.channelTitle}</p>
        <div className="flex items-center gap-1 line-clamp-1">
          <p className="text-xs whitespace-nowrap">
            {formatViewCount(Number(video.statistics.viewCount))} views
          </p>
          <div className="w-[3px] aspect-square rounded-full bg-gray-600" />
          <p className="text-xs whitespace-nowrap">{formatPublishTime(video.snippet.publishedAt)}</p>
        </div>
      </div>

      <Button size="icon" variant="ghost" className="flex-shrink-0 -mt-2 -mr-2">
        <EllipsisVertical size={20} />
      </Button>
    </div>
  );
};

export default RelatedVideo;
