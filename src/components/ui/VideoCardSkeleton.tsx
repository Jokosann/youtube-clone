import { Skeleton } from './Skeleton';

const VideoCardSkeleton = () => {
  return (
    <div className="w-full grid-card gap-x-5 gap-y-7">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-full h-full">
          <Skeleton className="w-full aspect-[2/1.15] rounded-xl" />
          <div className="flex gap-3 py-3 overflow-hidden">
            <div>
              <Skeleton className="w-9 aspect-square rounded-full mt-1" />
            </div>
            <div className="w-full flex flex-col gap-1">
              <Skeleton className="w-full h-3" />
              <Skeleton className="w-[70%] h-3" />
              <Skeleton className="w-[30%] h-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCardSkeleton;
