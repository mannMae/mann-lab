import { Navigate, Route, Routes } from 'react-router-dom';
import { Apps } from './Apps';
import { HabitStacks } from './HabitStacks';

export const AppsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Apps />} />
      <Route path="habit-stacks/" element={<HabitStacks />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
