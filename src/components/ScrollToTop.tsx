import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const categoryId = searchParams.get('cat');
  const channel = searchParams.get('u');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, videoId, categoryId, channel]);

  return null;
}
