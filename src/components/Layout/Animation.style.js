import styled from 'styled-components';

export const Wrapper = styled.img`
  position: absolute;
  top: 25%;
  right: ${(props) => props.right};
  width: 10vw;

  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
`;
