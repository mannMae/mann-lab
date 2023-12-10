import { routes } from 'configurations';
import { Inner, Wrapper, Button } from './ButtomNavigation.style';
import { Line } from './Line';
import { useState } from 'react';

import hatches from 'assets/images/hatches.png';

export const ButtomNavigation = () => {
  const [selectedUrl, setSelectedUrl] = useState('/');
  return (
    <Wrapper>
      <Line />
      <Inner>
        {routes.map((route, i) => (
          <Button key={i} isSelected={true} hatches={hatches}>
            {selectedUrl === route.url ? route.icons[1] : route.icons[0]}
            {route.name}
          </Button>
        ))}
      </Inner>
    </Wrapper>
  );
};
