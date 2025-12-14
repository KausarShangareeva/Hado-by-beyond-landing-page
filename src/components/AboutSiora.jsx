import styled from "styled-components";
import { Text, Highlighted } from "../assets/Text";

const cardsData = [
  {
    id: 1,
    title: "Privacy",
    text: "Личная приватность",
    image: "/SIORAimg/1.jpg",
  },
  {
    id: 2,
    title: "Waterfront Living",
    text: "Жизнь у воды",
    image: "/SIORAimg/2.jpg",
  },
  {
    id: 3,
    title: "Nature",
    text: "Природное окружение ",
    image: "/SIORAimg/3.jpg",
  },
  {
    id: 4,
    title: "Beauty",
    text: "Архитектурная эстетика",
    image: "/SIORAimg/4.jpg",
  },
  {
    id: 5,
    title: "Wellness",
    text: "Благополучие и здоровь",
    image: "/SIORAimg/5.jpg",
  },
];

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
  gap: 6rem;
`;

const CardsBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  row-gap: 0; /* вертикальный отступ */
  column-gap: 5rem; /* горизонтальный отступ */

  width: 100%;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 1.8rem;
  max-width: 33rem;
`;

const CardImage = styled.div`
  width: 10.1rem;
  height: 10.1rem;
  border-radius: 2rem;
  background: url(${(props) => props.$img}) center / cover no-repeat;
  flex-shrink: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CardButton = styled.button`
  display: flex;
  width: 13rem;
  height: 4rem;
  padding: 1.4rem 3.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-family: "Marvin Visions";

  border-radius: 3rem;
  border: 1px solid transparent;
  background: var(--color-button-beige);
  color: var(--color-button-text);
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-button-hover);
    border: 1px solid var(--color-button-text);
  }
`;

export default function AboutSiora() {
  return (
    <Section>
      <Intro>
        <Text variant="green" align="center">
          Новый premium waterfront-кластер
        </Text>
        <Text variant="h2" align="center">
          О районе SIØRA
        </Text>
        <Text variant="p-med" align="justify">
          <strong style={{ fontWeight: 600 }}> SIØRA </strong>— новый
          премиальный мастер-комьюнити на Dubai Islands, созданный по принципам
          японской философии Ikigai и скандинавского минимализма. Это не
          название проекта, а район, внутри которого находится HADO.
        </Text>
      </Intro>

      <Text variant="h3">
        Основная идея SIØRA — создать <br /> пространство
        <Highlighted>с идеальным балансом:</Highlighted>
      </Text>

      <CardsBox>
        {cardsData.map((card) => (
          <Card key={card.id}>
            <CardImage $img={card.image} />

            <CardContent>
              <Text variant="p-med" align="left" weight="600">
                {card.title}
              </Text>

              <Text variant="p" align="left" noWrap>
                {card.text}
              </Text>

              <CardButton>Смотреть</CardButton>
            </CardContent>
          </Card>
        ))}
      </CardsBox>
    </Section>
  );
}
