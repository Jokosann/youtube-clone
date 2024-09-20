import { Channel } from '@/types/channel';
import { DataVideoYoutube } from '@/types/video';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { useCallback, useEffect, useState } from 'react';

// Custom hook for fetching channel and video data
export const useFetchChannelData = (username: string | undefined) => {
  const [channel, setChannel] = useState<Channel | null>(null);
  const [videoChannel, setVideoChannel] = useState<DataVideoYoutube[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChannelDetail = useCallback(async () => {
    try {
      const response = await fetchApiFromYoutubeData('/channels', {
        part: 'snippet,contentDetails,statistics,topicDetails',
        forHandle: username,
      });
      setChannel(response?.items[0] || null);
    } catch (err) {
      setError('Gagal mengambil data channel.');
    } finally {
      setLoading(false);
    }
  }, [username]);

  const fetchVideoChannel = useCallback(async (channelId: string) => {
    try {
      const response = await fetchApiFromYoutubeData('/search', {
        part: 'snippet',
        channelId,
        maxResults: 10,
        chart: 'mostPopular',
        type: 'video',
      });
      setVideoChannel(response?.items || []);
    } catch (err) {
      setError('Gagal mengambil data video.');
    }
  }, []);

  useEffect(() => {
    if (username) fetchChannelDetail();
  }, [username, fetchChannelDetail]);

  useEffect(() => {
    if (channel?.id) fetchVideoChannel(channel.id);
  }, [channel?.id, fetchVideoChannel]);

  console.log({ videoChannel });

  return { channel, videoChannel, loading, error };
};
