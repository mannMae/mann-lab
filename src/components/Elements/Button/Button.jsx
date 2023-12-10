import { Inner, Wrapper } from './Button.style';

import hatches from 'assets/images/hatches.png';

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
