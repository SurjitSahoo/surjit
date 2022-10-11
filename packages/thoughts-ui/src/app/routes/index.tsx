import { Routes, Route } from 'react-router-dom';
import ThoughtPage from '../pages/thoughtPage';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/thought" element={<ThoughtPage />} />
    </Routes>
  );
}
