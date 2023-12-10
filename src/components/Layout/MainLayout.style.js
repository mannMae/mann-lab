import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
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
