import { useEffect, useState } from 'react';
import { Wrapper } from './Animation.style';

export const Animtaion = ({ source, right = '0', isAnimate }) => {
  const [transform, setTransform] = useState(null);
  const [transition, setTransition] = useState(null);
  useEffect(() => {
    if (isAnimate) {
      setTimeout(() => {
        setTransform('translateX(-100vw)');
        setTransition('1.5s 0.5s linear');
      }, [1000]);
    } else {
      setTransform(null);
      setTransition(null);
    }
  }, [isAnimate]);

  return (
    <Wrapper
      src={source}
      right={right}
      transform={transform}
      transition={transition}
    />
  );
};
