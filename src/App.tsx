import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import ScrollToTop from '@/components/ScrollToTop';
import Loading from '@/components/ui/Loading';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
