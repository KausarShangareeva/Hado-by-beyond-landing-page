import styled from "styled-components";
import { ButtonBeigeBlackIcon } from ".././assets/ButtonBeigeBlackIcon";
import { Download } from "lucide-react";
import { Text, Highlighted } from "../assets/Text";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
`;

const Item = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  max-width: 35rem;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const data = [
  {
    text: "Более 140 000 м² ландшафтных парков и зелёных зон",
    img: "/FacilitiesIMG/1.png",
  },
  {
    text: "Километры мягкого песчаного пляжа, доступного только резидентам",
    img: "/FacilitiesIMG/2.png",
  },
  {
    text: "10 км маршрутов для бега и велопрогулок",
    img: "/FacilitiesIMG/3.png",
  },
  {
    text: "Пространства для wellness: йога, медитации, фитнес-направления",
    img: "/FacilitiesIMG/4.png",
  },
  {
    text: "Рестораны и кафе у воды, уютные F&B-улицы",
    img: "/FacilitiesIMG/5.png",
  },
  {
    text: "Новое поколение современной архитектуры с приватными видами",
    img: "/FacilitiesIMG/6.png",
  },
  {
    text: "Единственный кластер Dubai Islands с частным beachfront-доступом",
    img: "/FacilitiesIMG/7.png",
  },
];

export default function Infrastructure() {
  return (
    <Section>
      <Intro>
        <Text variant="h3">
          <Highlighted> Инфраструктура SIØRA.</Highlighted>
          <br /> и Что делает SIØRA такой уникальной:
        </Text>

        <Text variant="p-med" align="justify">
          <strong style={{ fontWeight: 600 }}> SIØRA </strong> — это не просто
          район, а тщательно продуманная среда для жизни у воды. Всё
          пространство разработано так, чтобы объединить природу, эстетику и
          комфорт в единую гармоничную экосистему.
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

      <ButtonBeigeBlackIcon icon={<Download />} align="center">
        Скачать брошюру SIØRA
      </ButtonBeigeBlackIcon>
    </Section>
  );
}
