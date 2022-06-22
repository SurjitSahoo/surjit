import { Routes, Route } from 'react-router-dom';
import { Thought } from '@surjit/react-ui';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/thought" element={<Thought />} />
    </Routes>
  );
}
