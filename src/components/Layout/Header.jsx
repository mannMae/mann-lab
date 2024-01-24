import { useNavigate } from 'react-router-dom';
import { Inner, Logo, Wrapper } from './Header.style';
import { Line } from './Line';

import logo from 'assets/images/logo.png';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Inner>
        <Logo src={logo} onClick={() => navigate('/')} />
      </Inner>
      <Line />
    </Wrapper>
  );
};
