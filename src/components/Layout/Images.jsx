import { Wrapper, Image, Item } from './Images.style';
import { Animtaion } from './Animation';

import Questions from 'assets/images/questions.jpg';
import PenAndNote from 'assets/images/pen-and-note.jpg';
import Swimmer from 'assets/gifs/Swimmer.gif';
import Fish from 'assets/gifs/fish.gif';
import SolveLogic from 'assets/images/solve-logic.png';
import AppLogos from 'assets/images/app-logos.png';
import ServiceAnalisys from 'assets/images/service-analisys.jpg';
import LegoBlocks from 'assets/images/lego-blocks.jpg';
import Tree from 'assets/images/tree.jpg';

export const Images = ({ index }) => {
  return (
    <Wrapper>
      {articles.map((article, i) => {
        console.log(article.image);
        return (
          <Item opacity={i === index ? 1 : 0} key={i}>
            <Image src={article.image} width={article.width && article.width} />
            {article?.animation && (
              <Animtaion source={article?.animation} isAnimate={i === index} />
            )}
          </Item>
        );
      })}
    </Wrapper>
  );
};

const articles = [
  {
    image: Questions,
  },
  {
    image: PenAndNote,
    width: '100%',
  },
  {
    image: Swimmer,
    animation: Fish,
  },
  {
    image: SolveLogic,
    width: '100%',
  },
  { image: AppLogos, width: '100%' },
  { image: ServiceAnalisys },
  { image: LegoBlocks },
  { image: Tree },
];
