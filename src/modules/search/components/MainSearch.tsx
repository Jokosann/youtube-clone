import CategoryPills from '@/components/element/CategoryPills';
import VideoCard from '@/components/element/VideoCard';
import { Button } from '@/components/ui/Button';
import VideoCardSkeleton from '@/components/ui/VideoCardSkeleton';
import { navbarFilter } from '@/data/constants';
import { DataVideoYoutube } from '@/types/video';
import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { useEffect, useState } from 'react';

const MainSearch = ({ searchQuery }: { searchQuery: string }) => {
  const [navFilter, setNavFilter] = useState('all');
  const [searchResult, setSearchResult] = useState<DataVideoYoutube[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchVideo = async () => {
      setLoading(true);
      try {
        const data = await fetchApiFromYoutubeData('/search', {
          part: 'snippet',
          regionCode: 'ID',
          q: searchQuery,
          type: 'video',
          maxResults: 10,
        });
        const videoIds = data.items.map((item: any) => item.id.videoId).join(',');
        console.log(videoIds);
        const videoDetailsResponse = await fetchApiFromYoutubeData('/videos', {
          part: 'snippet,contentDetails,statistics',
          id: videoIds,
        });

        setSearchResult(videoDetailsResponse?.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchVideo();
  }, [searchQuery]);

  console.log(searchResult);

  return (
    <div className="mt-16">
      <CategoryPills>
        {navbarFilter.map((item: string, index: number) => (
          <Button
            variant={navFilter === item ? 'default' : 'secondary'}
            size="sm"
            key={index}
            onClick={() => setNavFilter(item)}
            className="rounded-lg capitalize text-sm font-medium whitespace-nowrap snap-end"
          >
            {item}
          </Button>
        ))}
      </CategoryPills>
      <div className="w-full grid-card gap-x-5 gap-y-7 mt-6">
        {loading ? (
          <VideoCardSkeleton />
        ) : searchResult.length > 0 ? (
          searchResult.map((video: DataVideoYoutube, i: number) => <VideoCard key={i} video={video} />)
        ) : (
          <p>nothing</p>
        )}
      </div>
    </div>
  );
};

export default MainSearch;
