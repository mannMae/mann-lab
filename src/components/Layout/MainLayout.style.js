import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;

  display: flex;

  background-color: #fff;
  height: 100vh;
`;

export const Inner = styled.section`
  position: relative;
  z-index: 5;
  @media (min-width: 700px) {
    margin-left: 20vw;
  }

  @media (max-width: 700px) {
    padding: 60px 0;
  }

  width: 100%;
  height: 100%;
`;
