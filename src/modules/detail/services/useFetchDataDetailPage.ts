import { Channel } from '@/types/channel';
import { CommentVideo } from '@/types/comment';
import { RelatedVideoType } from '@/types/related-video';
import { DataVideoYoutube } from '@/types/video';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { useCallback, useEffect, useState } from 'react';

// Hook custom untuk pengambilan data video
export const useFetchVideoData = (videoId: string, categoryId: string) => {
  const [video, setVideo] = useState<DataVideoYoutube | null>(null);
  const [comments, setComments] = useState<CommentVideo[] | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideoType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideoData = useCallback(async () => {
    try {
      setLoading(true);

      const [videoResponse, relatedResponse, commentResponse] = await Promise.all([
        fetchApiFromYoutubeData('/videos', { part: 'snippet,contentDetails,statistics', id: videoId }),
        fetchApiFromYoutubeData('/videos', {
          part: 'snippet,contentDetails,statistics',
          regionCode: 'ID',
          chart: 'mostPopular',
          videoCategoryId: categoryId,
          maxResults: 10,
        }),
        fetchApiFromYoutubeData('/commentThreads', { part: 'snippet', videoId, maxResults: 5 }),
      ]);

      setVideo(videoResponse?.items[0] || null);
      setRelatedVideos(relatedResponse?.items || []);
      setComments(commentResponse?.items || []);
    } catch (err) {
      setError('Gagal mengambil data video');
    } finally {
      setLoading(false);
    }
  }, [videoId, categoryId]);

  useEffect(() => {
    fetchVideoData();
  }, [fetchVideoData]);

  const fetchChannelData = useCallback(async (channelId: string) => {
    try {
      const channelResponse = await fetchApiFromYoutubeData('/channels', {
        part: 'snippet,contentDetails,statistics',
        id: channelId,
      });
      setChannel(channelResponse?.items[0] || null);
    } catch {
      setError('Gagal mengambil data channel');
    }
  }, []);

  useEffect(() => {
    if (video?.snippet?.channelId) {
      fetchChannelData(video.snippet.channelId);
    }
  }, [video, fetchChannelData]);

  console.log(relatedVideos);

  return { video, comments, channel, relatedVideos, loading, error };
};
