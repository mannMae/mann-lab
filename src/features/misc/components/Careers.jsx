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
        <Project></Project>
        <Project></Project>
      </Career>
    </Wrapper>
  );
};
