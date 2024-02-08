import {
  Career,
  Company,
  CompanyEmploymentPeriod,
  CompanyLink,
  CompanyName,
  CompanyPosition,
  HorizontalLine,
  Project,
  TitleWrapper,
  Wrapper,
} from './Careers.style';

import primaryHacthes from 'assets/images/theme/background-hatches-primary.png';

export const Careers = () => {
  return (
    <Wrapper>
      <TitleWrapper hatches={primaryHacthes}>경력</TitleWrapper>
      <HorizontalLine hatches={primaryHacthes} />
      <Career>
        <Company>
          <CompanyName>링커버스</CompanyName>
          <CompanyLink>https://linkerverse.net</CompanyLink>
          <CompanyPosition>React 프론트엔드 개발자</CompanyPosition>
          <CompanyEmploymentPeriod>2022.05 ~ 2023.06</CompanyEmploymentPeriod>
        </Company>
        <Project>
          프로젝트 기획 및 웹 프론트엔드 개발 Redux, Axios, Styled Components
          활용 손톱 이미지 분석을 위한 이미지 업로드 기능 구현 소셜로그인(구글,
          애플, 네이버, 카카오) 기능 구현 전문가 상담 기능을 위한 FCM 웹 푸쉬
          기능 구현 AWS Amplify 활용 웹 호스팅 및 CI/CD 구축 Lottie Animation,
          Framer Motion을 활용한 애니메이션 적용 애자일 스크럼 도입 Django
          백엔드 API 유지보수 React Native 활용, 모바일 앱 구현
        </Project>
        <Project></Project>
      </Career>
    </Wrapper>
  );
};
