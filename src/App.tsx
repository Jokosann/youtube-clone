import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
