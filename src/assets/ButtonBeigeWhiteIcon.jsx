import styled from "styled-components";
import { Text } from "./Text";
import { respond } from "../Breakpoints";

const ButtonBeigeWhiteIconStyled = styled.button`
  font-family: var(--font-main);
  font-size: var(--font-button);
  font-weight: 500;
  min-width: 25rem;
  background-color: var(--color-button-beige);
  color: var(--color-button-text);
  border: 1px solid transparent;
  border-radius: 4rem;
  padding: 1rem 3rem 1rem 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

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

    > div {
      border: 1px solid black;
    }
  }
`;

const IconWrapper = styled.div`
  border: 1px solid transparent;
  background-color: var(--color-icon-color-white);
  color: var(--color-icon-bg-black);
  padding: 1.3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--icon-small-height);
  width: var(--icon-small-height);
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
`;

const IconWrapper2 = styled.div`
  border: 1.5px solid black;
  background-color: var(--color-icon-color-white);
  color: var(--color-icon-bg-black);
  padding: 1.3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--icon-small-height);
  width: var(--icon-small-height);
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export function ButtonBeigeWhiteIcon({ children, icon, align, mt }) {
  return (
    <ButtonBeigeWhiteIconStyled align={align} mt={mt}>
      <IconWrapper>{icon}</IconWrapper>
      <p>{children}</p>
    </ButtonBeigeWhiteIconStyled>
  );
}

export function Button({ children, iconSrc, align, mt }) {
  return (
    <ButtonBeigeWhiteIconStyled align={align} mt={mt}>
      {iconSrc && (
        <IconWrapper>
          <img src={iconSrc} alt="icon" />
        </IconWrapper>
      )}
      <Text variant="btn" weight="500">
        {children}
      </Text>
    </ButtonBeigeWhiteIconStyled>
  );
}

export function IconSocial({ iconSrc }) {
  return (
    <IconWrapper2>
      <img src={iconSrc} alt="icon" />
    </IconWrapper2>
  );
}
