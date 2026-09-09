import { HashRouter, Routes, Route } from 'react-router-dom';
import { VideoWorkPage } from './pages/VideoWorkPage';
import { StillWorkPage } from './pages/StillWorkPage';
import { VideoDetailPage } from './pages/VideoDetailPage/VideoDetailPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<VideoWorkPage />} />
        <Route path="/still" element={<StillWorkPage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}
