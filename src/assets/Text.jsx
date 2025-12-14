import styled, { css } from "styled-components";
import { respond } from "../Breakpoints";

const TextStyled = styled.p`
  font-family: "Montserrat", sans-serif;
  color: var(--color-font);
  letter-spacing: 0.02em;

  ${({ variant }) => {
    switch (variant) {
      case "h1":
        return css`
          font-size: var(--font-h1);
          text-transform: uppercase;
          font-family: var(--font-heading);

          ${respond("s-phone")} {
            font-size: 6rem;
          }
        `;
      case "h2":
        return css`
          font-size: var(--font-h2);
          text-transform: uppercase;
          font-family: var(--font-heading);
        `;
      case "h3":
        return css`
          font-size: var(--font-h3);
          text-transform: uppercase;
          font-weight: 800;
        `;
      case "h4":
        return css`
          font-size: var(--font-h4);
          text-transform: uppercase;
          font-family: var(--font-heading);
        `;
      case "p":
        return css`
          font-size: var(--font-p);
          line-height: 1.5;
        `;
      case "p-med":
        return css`
          font-size: var(--font-p-medium);
          text-align: center;
          line-height: 1.5;
        `;
      case "p-big":
        return css`
          font-size: var(--font-p-big);
          text-align: center;
          line-height: 1.5;
        `;
      case "tags":
        return css`
          font-size: var(--font-tags);
        `;
      case "btn":
        return css`
          font-size: var(--font-button);
        `;
      case "highlight":
        return css`
          background-color: var(--color-highlight);
          padding: 1rem 2rem;
        `;
      case "green":
        return css`
          color: #406501;
          font-size: var(--font-p);
          font-weight: 500;
          position: relative;
          display: inline-block;

          &::after {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -6px; /* расстояние от текста */
            width: 50%; /* длина линии */
            height: 1px;
            background-color: #406501;
          }
        `;

      default:
        return css`
          font-size: var(--font-p);
        `;
    }
  }}

  /* Выравнивание через пропс align */
  text-align: ${(props) => props.align || "center"};
  font-weight: ${(props) => props.weight || "100"};
  white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "normal")};
`;

export function Text({ variant = "p", children, align, weight, noWrap }) {
  return (
    <TextStyled variant={variant} align={align} weight={weight} noWrap={noWrap}>
      {children}
    </TextStyled>
  );
}

const HighlightedS = styled.span`
  background-color: var(--color-highlight);
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;

export function Highlighted({ children }) {
  return <HighlightedS>{children}</HighlightedS>;
}
