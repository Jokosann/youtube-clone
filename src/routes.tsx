import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ChannelPage from './modules/channel/ChannelPage';
const HomePage = lazy(() => import('@/modules/home/Home'));
const DetailPage = lazy(() => import('@/modules/detail/DetailPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/channel" element={<ChannelPage />} />
    </Routes>
  );
};

export default AppRoutes;
