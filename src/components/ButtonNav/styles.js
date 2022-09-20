import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.PINK: theme.COLORS.PINK};
  border: none;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  cursor: pointer;

  :hover{
    font-weight: bold;
  }
`;
