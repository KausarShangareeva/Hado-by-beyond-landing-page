import { ButtonBeigeBlackIcon } from ".././assets/ButtonBeigeBlackIcon";
import { Download } from "lucide-react";
import styled from "styled-components";
import { Text, Highlighted } from "../assets/Text";
import { respond } from "../Breakpoints";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  height: 100%;

  ${respond("s-phone")} {
    flex-direction: column;
  }
`;

const LeftBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TopRow = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 50%;
`;

const PyramidBox = styled.div`
  background-color: var(--color-white); /* пример цвета */
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  text-align: center;
  padding: 7rem 3rem 3rem 3rem;
  border: 1px solid var(--color-black);
`;

export default function PreLaunch() {
  return (
    <Section>
      <Text variant="h2" align="center">
        СТАРТ ПРОДАЖ
        <br />
        15 ДЕКАБРЯ 2025
      </Text>
      <Container>
        <LeftBox>
          <Text variant="h3" align="left">
            Pre-launch - это ваш шанс быть{" "}
            <Highlighted>первыми в выборе</Highlighted> лучших видов и
            планировок
          </Text>
          <Text variant="p-med" align="justify">
            Возможность первыми выбрать лучшие виды, этажи и планировки до
            выхода проекта на рынок. Только для ограниченного числа клиентов.
          </Text>
          <Text variant="h3" align="left">
            Бонус:
          </Text>
          <Text variant="p-med" align="justify">
            Early EOI Bonus: 1–2% кешбэком (в зависимости от размера и
            количества юнитов)
          </Text>
        </LeftBox>
        <RightBox>
          <TopRow>
            <PyramidBox>
              <Text variant="p-med" align="justify">
                Первые две башни уже собрали депозиты EOI
              </Text>
            </PyramidBox>
            <PyramidBox>
              <Text variant="p-med" align="justify">
                Лучшие цены доступные только через EOI до запуска
              </Text>
            </PyramidBox>
          </TopRow>
          <PyramidBox>
            <Text variant="p-med" align="justify">
              Ограниченное количество мест для приоритетного распределения
            </Text>
          </PyramidBox>
        </RightBox>
      </Container>
      <ButtonBeigeBlackIcon icon={<Download />} align="center">
        Получить презентацию
      </ButtonBeigeBlackIcon>
    </Section>
  );
}
