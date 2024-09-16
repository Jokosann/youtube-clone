import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { MdOutlineSort } from 'react-icons/md';

import User1 from '/images/user1.png';
import { cn } from '@/utils/cn';
import CommentList from './CommentList';
import { CommentVideo } from '@/types/comment';

const CommentDetail = ({ comments }: { comments: CommentVideo[] | null }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [comment, setComment] = useState('');
  const buttonCommentActive = comment.trim() !== '';

  return (
    <>
      <div className="my-6">
        <div className="flex items-center gap-2 mb-4">
          <p className="text-lg font-bold">{comments?.length} Comments</p>
          <Button variant="ghost" className="hover:bg-transparent gap-2">
            <MdOutlineSort size={25} /> <span>Sort by</span>
          </Button>
        </div>

        <div className="flex gap-4">
          <Image
            src={User1}
            alt="Profile"
            width="45"
            height="45"
            className="rounded-full flex-shrink-0"
          />

          <div className="w-full">
            <div className="relative">
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
                className="border-b border-black outline-none w-full pb-1.5 text-sm placeholder:text-gray-600 placeholder:text-sm"
                onChange={(e) => setComment(e.target.value)}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
              />
              <div
                className={cn(
                  'absolute -bottom-[1px] left-0 right-0 h-0.5 bg-black scale-0 transition-scale transition-transform',
                  { 'scale-100': inputFocus }
                )}
              />
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <Button className="rounded-full px-6" variant="ghost">
                Cancel
              </Button>
              <Button
                disabled={!buttonCommentActive}
                className={cn('rounded-full px-6', {
                  'bg-[#0556bf] hover:bg-[#0556bf] ': buttonCommentActive,
                })}
                variant={buttonCommentActive ? 'default' : 'secondary'}
              >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {comments && comments.map((comment, i: number) => <CommentList key={i} comment={comment} />)}

        <Button
          variant="outline"
          className="w-full rounded-full text-blue-500 hover:text-blue-500 hover:bg-[#def1ff]"
        >
          Show more
        </Button>
      </div>
    </>
  );
};

export default CommentDetail;
