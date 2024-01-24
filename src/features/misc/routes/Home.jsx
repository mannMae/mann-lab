import { Link } from 'components/Elements';
import {
  SectionFooter,
  SectionHeader,
  Images,
  MainLayout,
  Phrases,
} from 'components/Layout';
import { useScroll } from 'hooks/useScroll';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [topValues, setTopValues] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    // console.log(topValues);
    // if (index < 0) {
    //   setIndex(0);
    // }
    // if (index >= topValues.length) {
    //   setIndex(topValues.length - 1);
    // }
    // if (window.scrollY > topValues[index]) {
    //   setIndex((prev) => prev + 1);
    //   console.log('Up');
    // } else {
    //   setIndex((prev) => prev - 1);
    //   console.log('Down');
    // }
    setScrollY(window.scrollY);
  };

  const [addScrollListener, removeScrollListener] = useScroll(handleScroll);

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
    addScrollListener();
    return () => {
      removeScrollListener();
    };
  }, [topValues]);

  useEffect(() => {
    console.log(scrollY);
    for (let i in topValues) {
      i = Number(i);
      console.log(i);
      const topValue = topValues[i];
      if (scrollY <= topValue) {
        setIndex(i);
        break;
      }
    }
  }, [scrollY]);

  useEffect(() => console.log(index), [index]);

  return (
    <>
      <MainLayout>
        <div>
          <SectionHeader />
          <Images index={index} />
          <Phrases setTopValues={setTopValues} />
        </div>
        <SectionFooter />
      </MainLayout>
    </>
  );
};
