import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;

  display: flex;

  background-color: #fff;
`;

export const Inner = styled.section`
  position: relative;
  z-index: 5;
  @media (min-width: 700px) {
    margin-left: 20vw;
  }

  @media (max-width: 700px) {
    margin: 60px 0;
  }

  width: 100%;
`;
