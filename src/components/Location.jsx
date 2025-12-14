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

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
`;

const LocationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 23rem;
`;

const ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 2rem;
  background: url(${(props) => props.image}) lightgray 50% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
`;

const TimeTag = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 13rem;
  height: 4rem;
  padding: 1.4rem 3.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: #c0eb75;
  color: #111;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
`;

const Map = styled.div`
  width: 100%;
  height: 50rem;
  background: url(/LocationIMG/Map.png) lightgray 50% / cover no-repeat;
`;

const data = [
  {
    text: "до торгового центра Deira Mall",
    time: "7 мин",
    img: "/LocationIMG/1.jpg",
  },
  {
    text: "до станции метро Gold Souq",
    time: "10 мин",
    img: "/LocationIMG/2.jpg",
  },
  {
    text: "до международного аэропорта DXB",
    time: "19 мин",
    img: "/LocationIMG/3.jpg",
  },
  {
    text: "до смотровой площадки Dubai Frame",
    time: "22 мин",
    img: "/LocationIMG/4.jpg",
  },
  {
    text: "до DIFC (финансовый центр Дубая)",
    time: "25 мин",
    img: "/LocationIMG/5.jpeg",
  },
  {
    text: "до центра Дубая Downtown Dubai",
    time: "26 мин",
    img: "/LocationIMG/6.jpg",
  },
  {
    text: "до района Business Bay",
    time: "33 мин",
    img: "/LocationIMG/7.jpg",
  },
];

export default function Location() {
  return (
    <Section>
      <Intro>
        <Text variant="h3">
          <Highlighted>📍 Локация SIØRA</Highlighted>
        </Text>

        <Text variant="p-med" align="justify">
          Район
          <strong style={{ fontWeight: 600 }}> SIØRA </strong> расположен так,
          чтобы сочетать уединённость островов и близость к ключевым точкам
          города. Это культовое место для жителей и гостей Дубая с развитой
          инфраструктурой, множеством ресторанов, прогулочных зон, парков и
          отелей.
          <br />
          <br />
          Здесь созданы все условия для комфортной жизни у воды — от набережных
          и частных пляжей до пространств для отдыха и активного образа жизни.
          За 20–30 минут можно добраться до основных достопримечательностей
          города или отправиться в морское путешествие прямо с острова.
        </Text>
      </Intro>
      <Container>
        {data.map((item, index) => (
          <LocationCard key={index}>
            <ImageWrapper image={item.img}>
              <TimeTag>{item.time}</TimeTag>
            </ImageWrapper>
            <Text variant="p" align="center">
              {item.text}
            </Text>
          </LocationCard>
        ))}
      </Container>
      <Map></Map>
      <ButtonBeigeBlackIcon icon={<Download />} align="center">
        Скачать брошюру SIØRA
      </ButtonBeigeBlackIcon>
    </Section>
  );
}
