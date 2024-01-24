import styled from 'styled-components';

export const Wrapper = styled.ul``;

export const App = styled.li`
  display: flex;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-image: ${(props) => `url(${props.primaryHacthes})`};
  }
`;

export const AppInfomation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AppThumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 20px;
`;

export const AppTitle = styled.h5`
  font-size: 18px;
`;
