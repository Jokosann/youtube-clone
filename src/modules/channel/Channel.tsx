import MainLayout from '@/layouts/MainLayout';
import MainChannelPage from './components/MainChannel';
import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@/components/ui/Loading';

const ChannelPage = () => {
  const { channel } = useParams();

  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <MainChannelPage username={channel} />
      </Suspense>
    </MainLayout>
  );
};

export default ChannelPage;
