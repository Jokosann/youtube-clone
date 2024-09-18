import { lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import DetailLayout from '@/layouts/DetailLayout';
import Loading from '@/components/ui/Loading';

const MainDetailPage = lazy(() => import('./components/MainDetail'));

const DetailPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get('v') || '';
  const categoryId = searchParams.get('cat') || '';

  if (!videoId && !categoryId) return <p className="text-red-500 ml-20 mt-20">Nothing data!!</p>;

  return (
    <DetailLayout>
      <Suspense key={`${videoId}-${categoryId}`} fallback={<Loading />}>
        <MainDetailPage videoId={videoId} categoryId={categoryId} />
      </Suspense>
    </DetailLayout>
  );
};

export default DetailPage;
