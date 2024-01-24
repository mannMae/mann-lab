import { Route, Routes } from 'react-router-dom';
import { Apps } from './Apps';

export const AppsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Apps />} />
    </Routes>
  );
};
