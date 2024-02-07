import {
  Body,
  Description,
  Header,
  HorizontalLine,
  Image,
  Subtitle,
  Title,
  TitleWrapper,
  Wrapper,
} from './Introduction.style';

import primaryHacthes from 'assets/images/theme/background-hatches-primary.png';

export const Introduction = () => {
  return (
    <Wrapper>
      <Header>
        <TitleWrapper hatches={primaryHacthes}>
          <Title>김재만</Title>
          <Subtitle>듣는 것을 좋아하는 개발자</Subtitle>
        </TitleWrapper>
      </Header>
      <HorizontalLine hatches={primaryHacthes} />
      <Body>
        <Image src="https://velog.velcdn.com/images/mannmae/profile/e338cb0c-6f03-4634-a0f7-fa1a26ac72ea/image.jpeg" />
        <Description>
          {
            'React / Django / AWS를 주로 활용하여 서비스를 구현하는 1년 차 웹 개발자입니다. 초기 스타트업에 1년간 근무하면서 Django, TypeScript, Solidity, Web3 등 서비스에 필요한 기술을 빠르게 학습하고 적용했습니다.\n\n팀 내 소통을 통해, 효과적으로 문제를 해결합니다. 솔직하고 충분한 소통을 위해 애자일 스크럼을 도입했습니다. 반면 불필요한 소통을 줄이고자, 간결한 코드스타일과 명확한 프로젝트 구조를 지향합니다.\n\n문제 해결을 위해 팀이 필요로 하는 역할을 수행합니다. 한정된 자원 안에서 팀원이 각자의 역량을 발휘할 수 있도록, 팀에 유연성을 부여합니다. 그리고 실패를 팀원 한 사람의 실패로 만들지 않습니다.'
          }
        </Description>
      </Body>
    </Wrapper>
  );
};
