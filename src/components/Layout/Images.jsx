import Questions from 'assets/images/questions.jpg';
import PenAndNote from 'assets/images/pen-and-note.jpg';
import Swimmer from 'assets/gifs/Swimmer.gif';
import SolveLogic from 'assets/images/solve-logic.png';
import AppLogos from 'assets/images/app-logos.png';
import ServiceAnalisys from 'assets/images/service-analisys.jpg';
import LegoBlocks from 'assets/images/lego-blocks.jpg';
import Tree from 'assets/images/tree.jpg';
import { Wrapper, Image, Item } from './Images.style';

export const Images = ({ index }) => {
  return (
    <Wrapper>
      {articles.map((article, i) => (
        <Item opacity={i === index ? 1 : 0} key={i}>
          <Image src={article.image} width={article.width && article.width} />
        </Item>
      ))}
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
