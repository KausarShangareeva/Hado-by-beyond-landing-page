import styled, { keyframes } from "styled-components";
import { Text } from "../assets/Text";

/* 🔹 Двигаем ровно на ширину одного блока */
const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

/* 🔹 Обертка */
const TickerWrapper = styled.div`
  width: 100vw;
  background: #c9b499;
  overflow: hidden;
  padding: 3rem 0;
`;

/* 🔹 Трек (2 копии подряд) */
const TickerTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;
`;

/* 🔹 Один блок контента */
const TickerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

export default function SalesTicker() {
  return (
    <TickerWrapper>
      <TickerTrack>
        {/* 1️⃣ оригинал */}
        <TickerContent>
          <Text noWrap variant="h4">
            🚀 СТАРТ ПРОДАЖ — 15 ДЕКАБРЯ 2025
          </Text>
          <Text noWrap variant="h4">
            🚀 СТАРТ ПРОДАЖ — 15 ДЕКАБРЯ 2025
          </Text>
          <Text noWrap variant="h4">
            🚀 СТАРТ ПРОДАЖ — 15 ДЕКАБРЯ 2025
          </Text>
        </TickerContent>

        {/* 2️⃣ копия — замыкает кольцо */}
        <TickerContent>
          <Text noWrap variant="h4">
            🚀 СТАРТ ПРОДАЖ — 15 ДЕКАБРЯ 2025
          </Text>
          <Text noWrap variant="h4">
            🚀 СТАРТ ПРОДАЖ — 15 ДЕКАБРЯ 2025
          </Text>
          <Text noWrap variant="h4">
            🚀 СТАРТ ПРОДАЖ — 15 ДЕКАБРЯ 2025
          </Text>
        </TickerContent>
      </TickerTrack>
    </TickerWrapper>
  );
}
