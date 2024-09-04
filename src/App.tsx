import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebcamContainer from './components/ui/WebcamContainer';

const HomePage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <WebcamContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
