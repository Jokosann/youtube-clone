import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './components/layout/HeaderLayout';

const HomePage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </HeaderLayout>
      </Suspense>
    </Router>
  );
}

export default App;
