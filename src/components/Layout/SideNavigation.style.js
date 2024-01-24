import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  display: none;
  @media (min-width: 700px) {
    width: 20vw;
    display: flex;
  }

  height: 100vh;

  justify-content: space-between;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled.img`
  width: 50%;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
