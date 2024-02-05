import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;

  margin: 10px 0 0 25px;
  font-size: 16px;

  text-decoration: ${(props) => props.textDecoration};
`;
