import styled from 'styled-components';

export const HorizontalLine = styled.div`
  width: 100%;
  border: 0.8px solid #999;
  border-radius: 50%;
  aspect-ratio: ${(props) => (props.aspectRatio ? props.aspectRatio : '150/1')};
`;

export const VertivalLine = styled.div`
  height: 100%;
  border: 0.8px solid #999;
  border-radius: 50%;
  aspect-ratio: ${(props) => (props.aspectRatio ? props.aspectRatio : '1/150')};
`;
