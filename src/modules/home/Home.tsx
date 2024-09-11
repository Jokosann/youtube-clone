import VideoCard from '@/components/element/VideoCard';
import VideoCardSkeleton from '@/components/ui/VideoCardSkeleton';
import { useFetchApi } from '@/hooks/useFetchApi';
import MainLayout from '@/layouts/MainLayout';
import { DataVideoYoutube } from '@/types/video';

const HomePage = () => {
  const { data, loading } = useFetchApi<DataVideoYoutube>('/videos', {
    part: 'snippet,contentDetails,statistics,player',
    chart: 'mostPopular',
    regionCode: 'ID',
    maxResults: 10,
  });

  // console.log(data);

  return (
    <MainLayout>
      <div className="w-full grid-card gap-x-5 gap-y-7">
        {loading ? (
          <VideoCardSkeleton />
        ) : (
          data?.map((video: DataVideoYoutube, i: number) => <VideoCard key={i} video={video} />)
        )}
      </div>
    </MainLayout>
  );
};

export default HomePage;
