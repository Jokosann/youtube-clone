import { Button } from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import { DataVideoYoutube } from '@/types/video';
import { EllipsisVertical } from 'lucide-react';

const ChannelVideo = ({ video }: { video: DataVideoYoutube }) => {
  return (
    <div className="flex md:flex-col w-full cursor-pointer">
      <div className="w-[168px] aspect-video md:w-full overflow-hidden rounded-xl mr-2 flex-shrink-0 md:mb-2">
        <Image
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.channelTitle}
          width="100%"
          height="100%"
          className="rounded-xl"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="w-full flex-grow-1 text-gray-600">
          <p className="text-sm font-medium mb-1 line-clamp-2">{video.snippet.title}</p>
          <p className="text-xs">{video.snippet.channelTitle}</p>
        </div>

        <Button size="icon" variant="ghost" className="flex-shrink-0 -mt-2 -mr-2">
          <EllipsisVertical size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ChannelVideo;
