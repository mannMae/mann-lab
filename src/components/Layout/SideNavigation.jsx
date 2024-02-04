import { Button, Line } from 'components/Elements';
import { Buttons, Inner, Logo, Wrapper } from './SideNavigation.style';

import logo from 'assets/images/logo.png';
import { routes } from 'configurations';
import { useLocation, useNavigate } from 'react-router-dom';

export const SideNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
              height="40px"
              width="130px"
              justifyContent="start"
              padding="0 0 0 10px"
            >
              {route.name}
            </Button>
          ))}
        </Buttons>
      </Inner>
      <Line isHorizontal={false} />
    </Wrapper>
  );
};
