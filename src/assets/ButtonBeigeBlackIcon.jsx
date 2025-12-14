import styled from "styled-components";
import { respond } from "../Breakpoints";

const ButtonBeigeBlackIconStyled = styled.button`
  font-family: var(--font-main);
  font-size: var(--font-button);
  font-weight: 500;
  background-color: var(--color-button-beige);
  color: var(--color-button-text);
  border: 1px solid transparent;
  border-radius: 4rem;
  padding: 1rem 3rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);

  /* 🔹 управление позиционированием */
  margin-top: ${({ mt }) => mt || "0"};
  margin-left: ${({ align }) =>
    align === "center" ? "auto" : align === "right" ? "auto" : "0"};
  margin-right: ${({ align }) =>
    align === "center" ? "auto" : align === "left" ? "auto" : "0"};

  ${respond("s-phone")} {
    width: 100%;
  }

  &:hover {
    background-color: var(--color-button-hover);
    border: 1px solid black;
  }

  svg {
    background-color: var(--color-icon-bg-black);
    color: var(--color-icon-color-white);
    padding: 1.3rem;
    border-radius: 50%;
    height: var(--icon-small-height);
    width: var(--icon-small-height);
    transition: all 0.3s ease-in-out;
    margin-right: auto;
  }
`;

export function IconStyle({ icon }) {
  return { icon };
}

export function ButtonBeigeBlackIcon({ children, icon, align, mt }) {
  return (
    <ButtonBeigeBlackIconStyled align={align} mt={mt}>
      <div>{icon}</div>
      <p>{children}</p>
      <div></div>
    </ButtonBeigeBlackIconStyled>
  );
}
