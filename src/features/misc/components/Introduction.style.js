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

export const Subtitle = styled.p``;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 5px;
  background-image: ${(props) => `url(${props.hatches})`};
`;

export const Body = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 10px;
`;

export const Image = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 15px;

  object-fit: cover;
  object-position: left;
`;

export const Description = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;
