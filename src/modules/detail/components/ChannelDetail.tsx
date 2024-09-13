import { Button } from '@/components/ui/Button';
import ChannelSkeleton from '@/components/ui/ChannelSkeleton';
import { Channel } from '@/types/channel';
import { formatViewCount } from '@/utils/formatViewCount';

const ChannelDetail = ({ channel }: { channel: Channel | null }) => {
  if (!channel) return <ChannelSkeleton />;

  return (
    <div className="flex items-center">
      <div className="w-10 center flex-shrink-0 mr-3">
        <img
          src={channel?.snippet?.thumbnails?.medium?.url}
          alt="test"
          className="w-10 aspect-square rounded-full"
        />
      </div>

      <div className="mr-6">
        <p className="font-medium">{channel?.snippet?.title}</p>
        <p className="text-[#606060] text-xs">
          {formatViewCount(Number(channel?.statistics?.subscriberCount))} subscribers
        </p>
      </div>

      <Button className="rounded-3xl h-9">Subscribe</Button>
    </div>
  );
};

export default ChannelDetail;
