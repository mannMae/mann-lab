import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 60px;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
`;

export const Inner = styled.div``;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;
