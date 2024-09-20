import { useState, useCallback } from 'react';
import ChannelDetail from './ChannelDetail';
import ActionDetail from './ActionDetail';
import DescriptionDetail from './DescriptionDetail';
import CommentDetail from './CommentDetail';
import Loading from '@/components/ui/Loading';
import { navbarFilter } from '@/data/constants';
import { Button } from '@/components/ui/Button';
import CategoryPills from '@/components/element/CategoryPills';
import RelatedVideo from './RelatedVideo';
import { useFetchVideoData } from '../services/useFetchDataDetailPage';
import VideoDetail from './VideoDetail';

const MainDetail = ({ videoId, categoryId }: { videoId: string; categoryId: string }) => {
  const { video, comments, channel, relatedVideos, loading, error } = useFetchVideoData(
    videoId,
    categoryId
  );
  const [navFilter, setNavFilter] = useState('all');

  const handleFilterChange = useCallback((filter: string) => {
    setNavFilter(filter);
  }, []);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <div className="w-full lg:w-[65%]">
        <VideoDetail id={videoId} />
        <div>
          <div className="text-lg sm:text-xl font-bold text-[rgb(15,15,15)] mt-4">
            {video?.snippet?.title}
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2 md:-mt-2">
            <ChannelDetail channel={channel} />
            <ActionDetail video={video} />
          </div>
        </div>
        <DescriptionDetail video={video} />
        <CommentDetail comments={comments} />
      </div>

      <div className="w-full lg:w-[35%] space-y-2">
        {relatedVideos && (
          <div className="mb-6">
            <CategoryPills>
              {navbarFilter.map((item) => (
                <Button
                  variant={navFilter === item ? 'default' : 'secondary'}
                  size="sm"
                  key={item}
                  onClick={() => handleFilterChange(item)}
                  className="rounded-lg capitalize text-sm font-medium whitespace-nowrap snap-end"
                >
                  {item}
                </Button>
              ))}
            </CategoryPills>
          </div>
        )}

        {relatedVideos?.length ? (
          relatedVideos.map((video, i) => <RelatedVideo key={i} video={video} />)
        ) : (
          <p className="text-slate-500 italic mt-2">Tidak ada video terkait</p>
        )}
      </div>
    </>
  );
};

export default MainDetail;
