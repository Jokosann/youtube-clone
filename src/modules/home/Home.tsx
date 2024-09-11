import Card from '@/components/element/Card';
import { useFetchApi } from '@/hooks/useFetchApi';
import MainLayout from '@/layouts/MainLayout';
import { DataVideoYoutube } from '@/types/video';

const HomePage = () => {
  const { data, loading } = useFetchApi<DataVideoYoutube>('/videos', {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode: 'ID',
    maxResults: 20,
  });

  return (
    <MainLayout>
      <div className="w-full grid-card gap-x-5 gap-y-7">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.map((video: DataVideoYoutube, i: number) => <Card key={i} video={video} />)
        )}
      </div>
    </MainLayout>
  );
};

export default HomePage;
