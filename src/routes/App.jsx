import { AppsRoutes } from 'features/apps';
import { Home, Portfolio, About } from 'features/misc';
import { ResearchRoutes } from 'features/researches/routes';
import { Navigate, useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const commonRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/portfolio', element: <Portfolio /> },
    {
      path: '/papps/*',
      element: <AppsRoutes />,
    },
    {
      path: '/researches',
      element: <ResearchRoutes />,
    },
    {
      path: '*',
      element: <Navigate to="." />,
    },
  ];
  const element = useRoutes([...commonRoutes]);
  return <>{element}</>;
};
