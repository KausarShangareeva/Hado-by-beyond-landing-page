import styled from "styled-components";

const BubbleStyled = styled.div`
  width: 200px;
  height: 200px;
  background-color: #facdca;
  opacity: var(--bubble-opacity);
  border-radius: 50%;
  filter: blur(var(--bubble-blur));
`;

export function Bubble() {
  return <BubbleStyled></BubbleStyled>;
}
