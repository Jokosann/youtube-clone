import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('@/modules/home/Home'));
const DetailPage = lazy(() => import('@/modules/detail/Detail'));
const ChannelPage = lazy(() => import('@/modules/channel/Channel'));
const SearchPage = lazy(() => import('@/modules/search/Search'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/watch" element={<DetailPage />} />
      <Route path="/:channel" element={<ChannelPage />} />
      <Route path="/result" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
