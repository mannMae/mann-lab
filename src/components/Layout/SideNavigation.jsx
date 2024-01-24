import { Button } from 'components/Elements';
import { Line } from './Line';
import { Buttons, Inner, Logo, Wrapper } from './SideNavigation.style';

import logo from 'assets/images/logo.png';
import { routes } from 'configurations';
import { useLocation, useNavigate } from 'react-router-dom';

export const SideNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <Wrapper>
      <Inner>
        <Logo src={logo} onClick={() => navigate('/')} />
        <Buttons>
          {routes.map((route, i) => (
            <Button
              key={i}
              startIcon={route.icons[0]}
              isSelected={location.pathname === route.url ? true : false}
              onClick={() => navigate(route.url)}
            >
              {route.name}
            </Button>
          ))}
        </Buttons>
      </Inner>
      <Line isHorizontal={false} height="100vh" />
    </Wrapper>
  );
};
