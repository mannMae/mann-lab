import { Image } from './Line.style';

import HorizontalLineImage from 'assets/images/horizontal-line.png';
import VerticalLineImage from 'assets/images/vertical-line.png';

export const Line = ({ isHorizontal = true, width, height }) => {
  if (isHorizontal) {
    return (
      <Image
        src={HorizontalLineImage}
        width={width ? width : '100%'}
        height={height ? height : '10px'}
        margin="0 -4px 0 -4px"
      />
    );
  }
  return (
    <Image
      src={VerticalLineImage}
      width={width ? width : '10px'}
      height={height ? height : '100%'}
      margin="-4px 0 -4px 0"
    />
  );
};
