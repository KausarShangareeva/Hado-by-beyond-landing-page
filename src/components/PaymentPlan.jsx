import styled from "styled-components";
import { Text, Highlighted } from "../assets/Text";
import { ButtonBeigeBlackIcon } from ".././assets/ButtonBeigeBlackIcon";
import { Plus } from "lucide-react";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 2rem;
  column-gap: 4rem;
`;

const Table2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

/* 🔹 Левая часть */
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`;

/* 🔹 Пирамида */
const Pyramid = styled.div`
  border: 1px solid #000;
  border-radius: 2rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  min-height: 40rem;

  /* центрируем верхнюю карточку */
  & > div:first-child {
    grid-column: 1 / -1;
    justify-self: center;
  }
`;

/* 🔹 Карточка */
const PyramidCard = styled.div`
  width: 100%;
  min-height: 17rem;
  border-radius: 1rem;
  border: 1px solid #000;
  background: #fff;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Montserrat;
  font-size: 1.6rem;
  font-weight: 500;
`;

/* 🔹 Правая картинка */
const RightImage = styled.div`
  flex: 1;
  min-height: 40rem;
  width: 100%;
  border-radius: 2rem;
  border: 1px solid #000;
  background: url("/Exterior/4.jpg") center / cover no-repeat;
`;

export default function PaymentPlan() {
  return (
    <Section>
      <Intro>
        <Text variant="green" align="center">
          Живите у воды уже сегодня
        </Text>
        <Text variant="h2" align="center">
          План оплаты
        </Text>
        <Text variant="h3">
          <Highlighted>Беспроцентная</Highlighted> рассрочка %
        </Text>
        <Text variant="p-med" align="alighn">
          Посмотрите, какие апартаменты мы
          <br /> предлагаем в HADO by Beyond:
        </Text>
      </Intro>

      <Wrapper>
        <Left>
          <Pyramid>
            <PyramidCard>
              <Table>
                <Text variant="p-med" align="left" noWrap weight="600">
                  Платёжная ставка
                </Text>
                <Text variant="p-med" align="left" weight="600">
                  Этапы оплаты
                </Text>

                <Text variant="p-med" align="left">
                  50%
                </Text>
                <Text variant="p-med" align="left">
                  во время строительства
                </Text>

                <Text variant="p-med" align="left">
                  50%
                </Text>
                <Text variant="p-med" align="left">
                  при сдаче
                </Text>
              </Table>
            </PyramidCard>

            <PyramidCard>
              <Table2>
                <Text variant="p-big" align="center" weight="600">
                  Сдача: <br /> Q3 2029
                </Text>
              </Table2>
            </PyramidCard>
            <PyramidCard>
              <Table2>
                <Text variant="p-big" align="center" weight="600">
                  EOI: <br /> 50 000 AED <br /> 13 600 USD
                </Text>
              </Table2>
            </PyramidCard>
          </Pyramid>
        </Left>

        <RightImage />
      </Wrapper>

      <ButtonBeigeBlackIcon icon={<Plus />} align="center">
        Узнать больше
      </ButtonBeigeBlackIcon>
    </Section>
  );
}
