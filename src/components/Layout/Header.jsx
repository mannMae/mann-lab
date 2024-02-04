import { useNavigate } from 'react-router-dom';
import { Column, Inner, Logo, Title, Wrapper } from './Header.style';

import logo from 'assets/images/logo.png';
import { Button, Line } from 'components/Elements';
import { PiArrowLeft } from 'react-icons/pi';

export const Header = ({ isAppHeader = false, title }) => {
  const navigate = useNavigate();
  return (
    <Wrapper isAppHeader={isAppHeader}>
      <Inner>
        <Column justifyContent="start">
          {isAppHeader && (
            <Button
              onClick={() => navigate(-1)}
              startIcon={<PiArrowLeft size="24" />}
            />
          )}
        </Column>
        <Column justifyContent="center">
          {title ? (
            <Title>{title}</Title>
          ) : (
            <Logo src={logo} onClick={() => navigate('/')} />
          )}
        </Column>
        <Column justifyContent="end"></Column>
      </Inner>
      <Line />
    </Wrapper>
  );
};
