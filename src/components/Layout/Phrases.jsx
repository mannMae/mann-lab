import { Item, Wrapper } from './Phrases.style';
import { Phrase } from './Phrase';

export const Phrases = ({ setTopValues }) => {
  return (
    <Wrapper>
      {phrases.map((phrase, i) => (
        <Item key={i}>
          <Phrase setTopValues={setTopValues}>{phrase}</Phrase>
        </Item>
      ))}
    </Wrapper>
  );
};

const phrases = [
  '세상을 살다보니 제게는 해결 해야할 문제가 참 많습니다. 그 중에서도 가장 해결하고 싶은 문제가 무엇인지 고민합니다.',
  '보통은 메모와 성실함으로 해결되는 문제들이죠. 우선 아날로그와 기존 서비스를 활용하여 문제를 해결해보려고 합니다, 커피와 함께!',
  '정신 차리고 보면 저는 문제 속에서 허우적 대는 아쿠아 맨이 되어 있습니다. 문제에 대해 신경쓸 수 있는 시간은 하루 중 얼마 되지 않거든요.',
  '알아 차린 순간부터 제 문제를 다시 뜯어봅니다. 기존 방식이 왜 나를 구하지 못했을까를 고민하면서 저만을 위한 서비스를 만드는 것이죠!',
  '모방은 창작의 어머니라고 하죠. 가장 효율적인 방법은 제가 많이 쓰는 앱을 들여다 보는 것 입니다!',
  '샅샅히 분석합니다, 집요하리 만치요. 세세하게 분석할 수록 제가 원하던 바가 무엇인지 선명해집니다.',
  '분해가 끝나면 그 중에 필요한 것을 취합니다. 뺄건 빼고, 더할건 더하고 조립합니다. 조립은 분해의 역순!',
  '완성된 앱은 제 일상에 잘 심습니다. 경험하면서 붎편한 점은 개선하고, 필요 없는 것은 가지치며 커다란 나무로 자라납니다.',
];