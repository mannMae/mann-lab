import { Inner, Wrapper } from './Button.style';

import hatches from 'assets/images/theme/background-hatches-primary.png';

export const Button = ({ children, isSelected, startIcon, onClick }) => {
  return (
    <Wrapper hatches={hatches} onClick={onClick}>
      <Inner isSelected={isSelected}>
        {startIcon}
        {children}
      </Inner>
    </Wrapper>
  );
};
