import styled from 'styled-components';

export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: contain;

  margin: ${(props) => props.margin};
  opacity: 0.5;
`;
