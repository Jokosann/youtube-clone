// import { useFetchApi } from '@/hooks/useFetchApi';
// import VideoCard from '@/components/element/VideoCard';
// import VideoCardSkeleton from '@/components/ui/VideoCardSkeleton';
// import { DataVideoYoutube } from '@/types/video';
import VideoCardTest from '@/components/element/VideoCardTest';
import { videos } from '@/data/constants';
import MainLayout from '@/layouts/MainLayout';
import { VideoYoutubeTest } from '@/types/video-test';

const HomePage = () => {
  // const { data, loading } = useFetchApi<DataVideoYoutube>('/videos', {
  //   part: 'snippet',
  //   chart: 'mostPopular',
  //   regionCode: 'ID',
  //   maxResults: 10,
  // });

  // console.log(data);

  return (
    <MainLayout>
      <div className="w-full grid-card gap-x-5 gap-y-7">
        {/* {loading ? (
          <VideoCardSkeleton />
        ) : (
          data?.map((video: DataVideoYoutube, i: number) => <VideoCard key={i} video={video} />)
        )} */}
        {videos.map((video: VideoYoutubeTest, i) => (
          <VideoCardTest key={i} video={video} />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
