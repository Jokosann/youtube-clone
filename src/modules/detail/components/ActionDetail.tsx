import { Button } from '@/components/ui/Button';
import { useState } from 'react';

import Share from '@/components/ui/svg/Share';
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import Download from '@/components/ui/svg/Download';
import { Ellipsis } from 'lucide-react';
import { formatViewCount } from '@/utils/formatViewCount';
import { DataVideoYoutube } from '@/types/video';
import { Skeleton } from '@/components/ui/Skeleton';

const ActionDetail = ({ video }: { video: DataVideoYoutube | null }) => {
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  if (!video) return <Skeleton className="w-full h-28" />;

  return (
    <div className="py-5 flex gap-4">
      <div className="w-[150px] rounded-3xl overflow-hidden flex">
        <Button
          onClick={() => setLikeActive((prev) => !prev)}
          variant="secondary"
          className="relative w-[60%] flex-shrink-0 flex gap-1 rounded-none hover:bg-[#edecec] whitespace-nowrap"
        >
          {!likeActive ? (
            <BiLike size={23} strokeWidth={0} className="flex-shrink-0" />
          ) : (
            <BiSolidLike size={23} className="flex-shrink-0" />
          )}
          <span className="text-sm">{formatViewCount(Number(video?.statistics?.likeCount))}</span>
          <div className="absolute -right-[1px] w-[2px] h-7 bg-[#e5e5e5]" />
        </Button>
        <Button
          onClick={() => setDislikeActive((prev) => !prev)}
          variant="secondary"
          className="w-[40%] flex justify-start rounded-none hover:bg-[#e5e5e5]"
        >
          {!dislikeActive ? (
            <BiDislike size={23} className="flex-shrink-0" />
          ) : (
            <BiSolidDislike size={23} className="flex-shrink-0" />
          )}
        </Button>
      </div>

      <Button variant="secondary" className="rounded-3xl hover:bg-[#e5e5e5]">
        <Share className="mr-2" /> <span className="font-medium">Share</span>
      </Button>

      <Button
        variant="secondary"
        className="hidden sm:flex md:hidden xl:flex rounded-3xl hover:bg-[#e5e5e5]"
      >
        <Download className="mr-2" /> <span className="font-medium">Download</span>
      </Button>

      <Button variant="secondary" size="icon" className="rounded-3xl hover:bg-[#e5e5e5]">
        <Ellipsis size={20} />
      </Button>
    </div>
  );
};

export default ActionDetail;
