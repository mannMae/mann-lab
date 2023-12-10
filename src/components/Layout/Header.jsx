import { Inner, Logo, Wrapper } from './Header.style';
import { Line } from './Line';

import logo from 'assets/images/logo.png';

export const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo src={logo} />
      </Inner>
      <Line />
    </Wrapper>
  );
};
