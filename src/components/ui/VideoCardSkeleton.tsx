const VideoCardSkeleton = () => {
  return (
    <div className="w-full grid-card gap-x-5 gap-y-7">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-full h-full">
          <div className="relative w-full bg-gray-200 aspect-[2/1.15] rounded-xl overflow-hidden z-0"></div>
          <div className="flex gap-3 py-3 overflow-hidden">
            <div>
              <div className="w-9 aspect-square rounded-full mt-1 bg-gray-200"></div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <div className="w-full h-3 rounded-sm bg-gray-200"></div>
              <div className="w-[70%] h-3 rounded-sm bg-gray-200"></div>
              <div className="w-[30%] h-3 rounded-sm bg-gray-200"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCardSkeleton;
