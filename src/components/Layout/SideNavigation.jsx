import { Button } from 'components/Elements';
import { Line } from './Line';
import { Buttons, Inner, Logo, Wrapper } from './SideNavigation.style';

import logo from 'assets/images/logo.png';
import { routes } from 'configurations';

export const SideNavigation = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo src={logo} />
        <Buttons>
          {routes.map((route, i) => (
            <Button
              key={i}
              startIcon={route.icons[0]}
              isSelected={i === 0 ? true : false}
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
