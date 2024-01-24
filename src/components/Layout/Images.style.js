import styled from 'styled-components';

export const Wrapper = styled.ul`
  overflow-x: hidden;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: hidden;
  z-index: -1;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => props.opacity};
  transition: 0.5s;

  will-change: opacity;
`;

export const Image = styled.img`
  max-height: 100vh;
`;
