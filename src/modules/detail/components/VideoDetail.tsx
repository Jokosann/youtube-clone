import { Skeleton } from '@/components/ui/Skeleton';

const VideoDetail = ({ id }: { id: string | null }) => {
  if (!id) return <Skeleton className="w-full h-full aspect-video" />;

  return (
    <div className="w-full h-full aspect-video overflow-hidden">
      <div className="w-full h-full object-cover">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          className="rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
