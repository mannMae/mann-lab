import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;
  z-index: -1;

  display: flex;

  background-color: #fcfbf9;
`;

export const Inner = styled.section`
  @media (min-width: 700px) {
    margin-left: 20vw;
  }

  @media (max-width: 700px) {
    margin: 60px 0;
  }

  width: 100%;
`;
