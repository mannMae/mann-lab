import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 0;

  overflow: hidden;

  cursor: pointer;

  &:hover {
    background-image: ${(props) => `url(${props.hatches})`};
    background-size: cover;
  }
`;

export const Inner = styled.div`
  height: 40px;
  width: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  background-color: ${(props) =>
    props.isSelected ? 'rgba(0,0,0,0.6)' : 'transparent'};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
`;
