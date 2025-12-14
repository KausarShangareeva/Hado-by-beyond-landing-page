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

  gap: 6rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10rem;
`;

const Item = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  max-width: 28rem;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const data = [
  {
    text: "Высокие потолки (до 3,2 м)",
    img: "/FacilitiesIMG/8.png",
  },
  {
    text: "Панорамные окна в пол",
    img: "/FacilitiesIMG/9.png",
  },
  {
    text: "Большие балконы и террасы",
    img: "/FacilitiesIMG/10.png",
  },
  {
    text: "Тёплая отделка и японско-скандинавский дизайн",
    img: "/FacilitiesIMG/11.png",
  },
  {
    text: "Просторные планировки от 1BR до 4BR duplex",
    img: "/FacilitiesIMG/12.png",
  },
];

export default function AboutHado() {
  return (
    <Section>
      <Intro>
        <Text variant="green" align="center">
          Первый проект в новом районе SIØRA
        </Text>
        <Text variant="h2" align="center">
          О проекте HADO
        </Text>
        <Text variant="p-med" align="center">
          <strong style={{ fontWeight: 600 }}> HADO </strong>— первый и самый
          ожидаемый запуск в SIØRA. Проект включает три <br /> скульптурные
          башни, ориентированные по свету и видам.
        </Text>
        <Text variant="h3">
          <Highlighted>Ключевые особенности:</Highlighted>
        </Text>
      </Intro>

      <Container>
        {data.map((item, index) => (
          <Item key={index}>
            <Image src={item.img} alt={`Infrastructure ${index + 1}`} />

            <Text variant="tags" align="left">
              {item.text}
            </Text>
          </Item>
        ))}
      </Container>

      <ButtonBeigeBlackIcon icon={<Plus />} align="center">
        Получить подробности о проекте
      </ButtonBeigeBlackIcon>
    </Section>
  );
}
