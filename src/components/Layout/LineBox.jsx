import { Line } from './Line';
import { Bottom, Middle, Top, Wrapper } from './LineBox.style';

export const LineBox = ({ children }) => {
  return (
    <Wrapper>
      <Top>
        <Line />
      </Top>
      <Middle>
        <Line isHorizontal={false} />
        lsjdfhksjdhffkjsdhfkjsh
        {children}
        <Line isHorizontal={false} />
      </Middle>
      <Bottom>
        <Line />
      </Bottom>
    </Wrapper>
  );
};
