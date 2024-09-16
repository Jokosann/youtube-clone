import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { CommentVideo } from '@/types/comment';
import { EllipsisVertical } from 'lucide-react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';

import Profile from '/images/user_profile.jpg';
import { formatPublishTime } from '@/utils/formatPublishTime';

const CommentList = ({ comment }: { comment: CommentVideo | null }) => {
  return (
    <div className="flex justify-between">
      <div className="w-14 flex-shrink-0">
        <Image
          src={comment ? comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl : Profile}
          alt={comment ? comment?.snippet?.topLevelComment?.snippet?.authorDisplayName : 'profile'}
          width="40"
          height="40"
          className="rounded-full"
        />
      </div>

      <div className="w-full flex-grow-1">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-[13px] font-medium">
            {comment && comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </p>
          <p className="text-xs text-gray-600">
            {comment && formatPublishTime(comment?.snippet?.topLevelComment?.snippet?.updatedAt)}
          </p>
        </div>

        <pre className="text-sm text-pretty line-clamp-4">
          {comment && comment?.snippet?.topLevelComment?.snippet?.textOriginal}
        </pre>

        <div className="flex items-center gap-0.5 -ml-[10px]">
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <BiLike size={22} />
            </Button>

            {comment?.snippet?.topLevelComment?.snippet?.likeCount !== 0 && (
              <span className="text-gray-600 text-xs">
                {comment?.snippet?.topLevelComment?.snippet?.likeCount}
              </span>
            )}
          </div>

          <Button variant="ghost" size="icon">
            <BiDislike size={22} />
          </Button>

          <Button variant="ghost" size="sm" className="rounded-full text-xs font-medium">
            Replay
          </Button>
        </div>

        {comment?.snippet?.totalReplyCount !== 0 && (
          <Button
            variant="ghost"
            className="space-x-3 rounded-full -ml-[10px] text-blue-500 hover:text-blue-500 hover:bg-[#def1ff]"
          >
            <MdArrowForwardIos size={17} className="rotate-90" />{' '}
            <span>{comment?.snippet.totalReplyCount} replay</span>
          </Button>
        )}
      </div>

      <Button size="icon" variant="ghost" className="flex-shrink-0 -mt-2 -mr-2">
        <EllipsisVertical size={20} />
      </Button>
    </div>
  );
};

export default CommentList;
