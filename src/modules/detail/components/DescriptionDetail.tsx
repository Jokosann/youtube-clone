import { Skeleton } from '@/components/ui/Skeleton';
import { DataVideoYoutube } from '@/types/video';
import { formatPublishTime, formatPublishTimeDetail } from '@/utils/formatPublishTime';
import { formatViewCount } from '@/utils/formatViewCount';
import { useRef, useState } from 'react';

const RenderHastag = ({ value }: { value: string | undefined }) => {
  return <span className="text-[#0961d4]">#{value}</span>;
};
const DescriptionDetail = ({ video }: { video: DataVideoYoutube | null }) => {
  const moreRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMoreClick = () => {
    if (moreRef.current) {
      moreRef.current.style.height = isExpanded ? '112px' : 'auto';
      setIsExpanded(!isExpanded);
    }
  };

  if (!video) return <Skeleton className="w-full h-28 rounded-xl" />;

  return (
    <div ref={moreRef} className="relative w-full h-28 rounded-xl overflow-hidden">
      <div className="bg-[#f2f2f2] p-3  text-sm">
        <div className="font-medium space-x-2">
          <span>{formatViewCount(Number(video.statistics.viewCount))} views</span>
          <span>
            {video && isExpanded
              ? formatPublishTimeDetail(video.snippet.publishedAt)
              : formatPublishTime(video.snippet.publishedAt)}
          </span>
          <RenderHastag value={video?.snippet?.tags && video?.snippet?.tags[0]} />
          <RenderHastag value={video?.snippet?.tags && video?.snippet?.tags[1]} />
          <RenderHastag value={video?.snippet?.tags && video?.snippet?.tags[2]} />
        </div>

        <pre className="text-wrap mb-6">{video?.snippet?.description}</pre>

        <div className="flex flex-wrap justify-start gap-x-1 mb-4">
          {video?.snippet?.tags &&
            video?.snippet?.tags.map((item: string, i: number) => <RenderHastag key={i} value={item} />)}
        </div>

        <div onClick={handleMoreClick} className="cursor-pointer pt-2 font-medium">
          Show less
        </div>
      </div>

      {!isExpanded && (
        <div
          onClick={handleMoreClick}
          className="absolute bottom-0 right-0 bg-gradient-to-l from-[#f2f2f2] from-90% to-transparent text-sm font-medium px-4 cursor-pointer"
        >
          ...more
        </div>
      )}
    </div>
  );
};

export default DescriptionDetail;
