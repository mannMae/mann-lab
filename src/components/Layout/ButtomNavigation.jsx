import { routes } from 'configurations';
import { Inner, Wrapper, Button } from './ButtomNavigation.style';
import { useState } from 'react';

import hatches from 'assets/images/theme/hatches.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'components/Elements';

export const ButtomNavigation = () => {
  const [selectedUrl, setSelectedUrl] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Wrapper>
      <Line />
      <Inner>
        {routes.map((route, i) => (
          <Button
            key={i}
            isSelected={location.pathname === route.url ? true : false}
            hatches={hatches}
            onClick={() => navigate(route.url)}
          >
            {location.pathname === route.url ? route.icons[1] : route.icons[0]}
            {route.name}
          </Button>
        ))}
      </Inner>
    </Wrapper>
  );
};
