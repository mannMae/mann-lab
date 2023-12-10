import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  height: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;

  opacity: 0;
  @media (max-width: 700px) {
    opacity: 1;
  }
`;

export const Inner = styled.div``;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;
