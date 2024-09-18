import MainLayout from '@/layouts/MainLayout';
import VideoCard from '@/components/element/VideoCard';
import VideoCardSkeleton from '@/components/ui/VideoCardSkeleton';

import { DataVideoYoutube } from '@/types/video';
import { useFetchApi } from '@/hooks/useFetchApi';

const HomePage = () => {
  const { data, loading } = useFetchApi<DataVideoYoutube>('/videos', {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode: 'ID',
    maxResults: 20,
  });

  return (
    <MainLayout>
      <div className="w-full grid-card gap-x-5 gap-y-7 mt-[135px] ">
        {loading ? (
          <VideoCardSkeleton />
        ) : (
          data &&
          data.length > 0 &&
          data.map((video: DataVideoYoutube, i: number) => <VideoCard key={i} video={video} />)
        )}
      </div>
    </MainLayout>
  );
};

export default HomePage;
