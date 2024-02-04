import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 60px;

  flex-direction: column;

  background-color: #fff;

  display: ${(props) => (props.isAppHeader ? 'flex' : 'none')};
  @media (max-width: 700px) {
    display: flex;
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: 15px;
`;

export const Title = styled.h2`
  font-size: 22px;
`;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;
