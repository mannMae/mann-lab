import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 30vh 50px 50px;
`;

export const Points = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Point = styled.li``;

export const PointTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const PointDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  text-align: center;
`;
