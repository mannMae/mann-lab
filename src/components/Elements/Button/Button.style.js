import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props) => props.border};
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
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  gap: 15px;

  padding: ${(props) => props.padding};

  background-color: ${(props) =>
    props.isSelected ? 'rgba(0,0,0,0.6)' : 'transparent'};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
`;
