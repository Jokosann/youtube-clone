import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DetailLayout from '@/layouts/DetailLayout';
import { DataVideoYoutube } from '@/types/video';
import { Channel } from '@/types/channel';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import ActionDetail from './components/ActionDetail';
import DescriptionDetail from './components/DescriptionDetail';
import Loading from '@/components/ui/Loading';
import { CommentVideo } from '@/types/comment';
import CommentDetail from './components/CommentDetail';
import RelatedVideo from './components/RelatedVideo';
import { RelatedVideoType } from '@/types/related-video';
import CategoryPills from '@/components/element/CategoryPills';

const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const categoryId = searchParams.get('cat');

  const [video, setVideo] = useState<DataVideoYoutube | null>(null);
  const [comments, setComments] = useState<CommentVideo[] | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideoType[] | null>(null);

  useEffect(() => {
    const fetchVideoDetail = async () => {
      try {
        const response = await fetchApiFromYoutubeData('/videos', {
          part: 'snippet,contentDetails,statistics',
          id: videoId,
        });
        setVideo(response?.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchVideoComment = async () => {
      try {
        const response = await fetchApiFromYoutubeData('/commentThreads', {
          part: 'snippet',
          videoId: videoId,
          maxResults: 5,
        });
        setComments(response?.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideoDetail();
    fetchVideoComment();
  }, [videoId]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      try {
        const response = await fetchApiFromYoutubeData('/videos', {
          part: 'snippet,contentDetails,statistics',
          regionCode: 'ID',
          chart: 'mostPopular',
          videoCategoryId: categoryId,
          maxResults: 10,
        });

        setRelatedVideos(response?.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRelatedVideos();
  }, [categoryId]);

  useEffect(() => {
    if (video) {
      const fetchChannel = async () => {
        try {
          const response = await fetchApiFromYoutubeData('/channels', {
            part: 'snippet,contentDetails,statistics',
            id: video?.snippet?.channelId,
          });
          setChannel(response?.items[0]);
        } catch (error) {
          console.log(error);
        }
      };

      fetchChannel();
    }
  }, [video]);

  if (!video) return <Loading />;

  return (
    <DetailLayout>
      <div className="w-full lg:w-[65%]">
        {/* video */}
        <VideoDetail id={videoId} />

        {/* title */}
        <div>
          <div className="text-lg sm:text-xl font-bold text-[rgb(15,15,15)] mt-4">
            {video?.snippet?.title}
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2 md:-mt-2">
            <ChannelDetail channel={channel} />
            <ActionDetail video={video} />
          </div>
        </div>

        {/* description */}
        <DescriptionDetail video={video} />

        {/* comment */}
        <CommentDetail comments={comments} />
      </div>

      {/* relate video */}
      <div className="w-full lg:w-[35%] space-y-2">
        {relatedVideos && (
          <div className="mb-6">
            <CategoryPills />
          </div>
        )}

        {relatedVideos ? (
          relatedVideos.map((video: RelatedVideoType, i: number) => (
            <RelatedVideo key={i} video={video} />
          ))
        ) : (
          <p className="text-slate-500 italic mt-2">Nothing related videos</p>
        )}
      </div>
    </DetailLayout>
  );
};

export default DetailPage;
