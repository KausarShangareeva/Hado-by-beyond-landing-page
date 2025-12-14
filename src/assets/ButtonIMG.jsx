import styled from "styled-components";
import { Text, Highlighted } from "../assets/Text";

const ButtonIMGStyled = styled.button`
  font-family: var(--font-main);
  font-size: var(--font-button);
  font-weight: 500;
  background-color: var(--color-button-beige);
  color: var(--color-button-text);
  border: none;
  border-radius: 4rem;
  padding: 0.8rem 5rem 0.8rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);

  transition: all 0.3s ease-in-out;

  /* 🔹 управление позиционированием */
  margin-top: ${({ mt }) => mt || "0"};
  margin-left: ${({ align }) =>
    align === "center" ? "auto" : align === "right" ? "auto" : "0"};
  margin-right: ${({ align }) =>
    align === "center" ? "auto" : align === "left" ? "auto" : "0"};

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

const IconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: url(${({ src }) => src}) center / cover no-repeat;
  flex-shrink: 0;
`;

export function ButtonIMG({ children, imgSrc, align, mt, onClick }) {
  return (
    <ButtonIMGStyled align={align} mt={mt} onClick={onClick}>
      {imgSrc && <IconWrapper src={imgSrc} />}
      <Text variant="btn" weight="500">
        {children}
      </Text>
    </ButtonIMGStyled>
  );
}
