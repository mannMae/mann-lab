import { Wrapper } from './Link.style';

export const Link = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
