import {
  Point,
  PointDescription,
  PointTitle,
  Points,
  Wrapper,
} from './SectionFooter.style';

export const SectionFooter = () => {
  return (
    <Wrapper>
      <Points>
        {points.map((point, i) => (
          <Point key={i}>
            <PointTitle>{point.title}</PointTitle>
            <PointDescription>{point.description}</PointDescription>
          </Point>
        ))}
      </Points>
    </Wrapper>
  );
};

const points = [
  {
    title: '마에스트로의 역할은 잘 듣는 것!',
    description:
      '수동적으로 코드를 생산하지 않습니다. \n문제를 해결하기 위하여 다양한 사람들과 소통하려고 노력합니다. \n그리고 고객을 매우 사랑합니다!',
  },
  {
    title: '우리 모두를 합친 것보다 현명한 사람은 없다!',
    description:
      '나의 성과보다 팀의 성과가 중요합니다. \n서로 솔직하고, 자주 소통하며, 지지하고 응원하는 팀 문화를 지향합니다. \n하지만, 팀만큼 동료를 존중합니다!',
  },
  {
    title: '지속 가능한 성장!',
    description:
      '소프트웨어 장인까지 갈 길이 멉니다. \n하루하루를 지속 가능한 결과와 성장으로 채워가려고 합니다. \n물론 약속된 성과는 달성해야죠!',
  },
];
