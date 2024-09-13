import { useFetchApi } from '@/hooks/useFetchApi';
import VideoCard from '@/components/element/VideoCard';
import VideoCardSkeleton from '@/components/ui/VideoCardSkeleton';
import { DataVideoYoutube } from '@/types/video';
import MainLayout from '@/layouts/MainLayout';

const HomePage = () => {
  const { data, loading } = useFetchApi<DataVideoYoutube>('/videos', {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode: 'ID',
    maxResults: 20,
  });

  // console.log(data);

  return (
    <MainLayout>
      <div className="w-full grid-card gap-x-5 gap-y-7">
        {loading ? (
          <VideoCardSkeleton />
        ) : (
          data && data.map((video: DataVideoYoutube, i: number) => <VideoCard key={i} video={video} />)
        )}
      </div>
    </MainLayout>
  );
};

export default HomePage;
