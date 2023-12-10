import { Phrase, Title, Wrapper } from './SectionHeader.style';

export const SectionHeader = () => {
  return (
    <Wrapper>
      <Title>소프트웨어 장인을 꿈꾸는 만마에!</Title>
      <Phrase>
        {
          '만마에가 만들어가는 Mann Lab이 세상에 귀 기울이고, \n서비스를 만드는 과정을 소개합니다 :)'
        }
      </Phrase>
    </Wrapper>
  );
};
