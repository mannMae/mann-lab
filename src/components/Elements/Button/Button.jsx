import { Inner, Wrapper } from './Button.style';

import hatches from 'assets/images/theme/background-hatches-primary.png';

export const Button = ({
  children,
  isSelected,
  startIcon,
  onClick,
  height,
  width,
  justifyContent = 'center',
  border = '1px solid rgba(0, 0, 0, 0.1)',
  padding,
}) => {
  return (
    <Wrapper hatches={hatches} onClick={onClick}>
      <Inner
        isSelected={isSelected}
        height={height}
        width={width}
        justifyContent={justifyContent}
        border={border}
        padding={padding}
      >
        {startIcon}
        {children}
      </Inner>
    </Wrapper>
  );
};
