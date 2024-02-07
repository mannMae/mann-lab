import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 20px;
`;

export const Header = styled.header``;

export const TitleWrapper = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url(${props.hatches})`};
  background-size: cover;

  border-radius: 5px 5px 0 0;
  padding: 20px;
`;

export const Title = styled.h3``;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 5px;
  background-image: ${(props) => `url(${props.hatches})`};
`;

export const Career = styled.div`
  padding: 15px;
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.h4``;

export const CompanyLink = styled.a``;

export const CompanyPosition = styled.span``;

export const CompanyEmploymentPeriod = styled.span``;

export const Project = styled.div``;
