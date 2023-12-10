import { useEffect, useRef } from 'react';
import { Wrapper } from './Phrase.style';

export const Phrase = ({ children, setTopValues }) => {
  const ref = useRef();

  useEffect(() => {
    setTopValues((prev) => {
      if (prev.includes(ref.current.offsetTop)) {
        return prev;
      }
      return [...prev, ref.current.offsetTop];
    });
  }, []);

  return <Wrapper ref={ref}>{children}</Wrapper>;
};
