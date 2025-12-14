import styled from "styled-components";

const ButtonBlackStyled = styled.button`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.typography.button};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export function ButtonBlack({ children }) {
  return <ButtonBlackStyled>{children}</ButtonBlackStyled>;
}
