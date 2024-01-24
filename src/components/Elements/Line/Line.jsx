import { HorizontalLine, VertivalLine } from './Line.style';

export const Line = ({ isHorizontal = true, aspectRatio }) => {
  if (isHorizontal) {
    return <HorizontalLine aspectRatio={aspectRatio} />;
  }
  return <VertivalLine aspectRatio={aspectRatio} />;
};
