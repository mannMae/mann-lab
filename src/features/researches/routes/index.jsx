import { MainLayout } from 'components/Layout';
import { Route, Routes } from 'react-router-dom';

export const ResearchRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout>Research</MainLayout>} />
    </Routes>
  );
};
