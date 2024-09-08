import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('@/modules/home/Home'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
