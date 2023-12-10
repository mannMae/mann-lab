import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
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

export const Inner = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  span {
    background-image: ${(props) => `url(${props.hatches})`};
    background-size: cover;
  }
`;
