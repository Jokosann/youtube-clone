import MainLayout from '@/layouts/MainLayout';
import { useSearchParams } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import { Suspense } from 'react';
import Loading from '@/components/ui/Loading';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <MainSearch searchQuery={searchQuery} />
      </Suspense>
    </MainLayout>
  );
};

export default SearchPage;
