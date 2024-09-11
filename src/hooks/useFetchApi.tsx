import { fetchApiFromYoutubeData } from '@/utils/fetchApi';
import { useEffect, useState } from 'react';

export const useFetchApi = <T,>(path: string, params: any) => {
  const [data, setData] = useState<T[] | null>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataApi = async () => {
      setLoading(true);
      try {
        const res = await fetchApiFromYoutubeData(path, params);
        setData(res.items);
      } catch (error) {
        console.log('error fetching data: ' + error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataApi();
  }, [path]);

  return { data, loading };
};
