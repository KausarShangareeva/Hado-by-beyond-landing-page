import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Text, Highlighted } from "../assets/Text";
import { ButtonIMG } from ".././assets/ButtonIMG";
import { respond } from "../Breakpoints";

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

const ButtonWraper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;

  ${respond("s-phone")} {
    gap: 2rem;
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const CardINT = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  width: 35.5rem;
  border-radius: 2rem;
  border: 1px solid #000;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: 0;
  animation: ${appear} 0.5s forwards;
  animation-delay: ${(props) => props.delay || "0s"};

  ${respond("s-phone")} {
    width: 100%;
  }
`;

const CardEXT = styled.div`
  width: 35.5rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  opacity: 0;
  animation: ${appear} 0.5s forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const CardTag = styled.span`
  width: fit-content;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #e9f2ff;
  font-family: var(--font-main);
  font-size: var(--font-tags);
  color: #0057d2;
  font-weight: 500;
`;

const CardImage = styled.div`
  cursor: pointer;
  width: 100%;
  min-height: 22rem;
  border-radius: 1.5rem;
  background: url(${(props) => props.src}) center / cover no-repeat;
`;

const CardDescription = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;

  span {
    font-weight: 600;
  }
`;

const CardButton = styled.button`
  display: flex;
  width: 100%;
  padding: 1.6rem 12.3rem;
  justify-content: center;
  align-items: center;
  border-radius: 999.9rem;
  border: 0 solid #e5e7eb;
  background: #000;
  color: #fff;
  font-size: var(--font-button);
  font-family: var(--font-main);
  cursor: pointer;
`;

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 3rem;
  animation: ${fadeInScale} 0.4s ease forwards;
`;

const exteriorData = Array.from(
  { length: 12 },
  (_, i) => `/Exterior/${i + 1}.jpg`
);

const interiorData = [
  {
    tag: "мебелирован",
    title: "1 спальней",
    price: "624 000",
    left: "Х квартир!",
    image: "/Interior/Hado_1BR.png",
  },
  {
    tag: "мебелирован",
    title: "2 спальнями",
    price: "870 000",
    left: "Х квартир!",
    image: "/Interior/Hado_2BR.png",
  },
  {
    tag: "мебелирован",
    title: "3 спальнями",
    price: "1 330 000",
    left: "Х квартир!",
    image: "/Interior/Hado_3BR.png",
  },
  {
    tag: "мебелирован",
    title: "3 спальнями",
    price: "2 360 000",
    left: "Х квартир!",
    image: "/Interior/Hado_3BR_Duplex.png",
  },
  {
    tag: "мебелирован",
    title: "4 спальнями",
    price: "1 980 000",
    left: "Х квартир!",
    image: "/Interior/Hado_4BR.png",
  },
  {
    tag: "мебелирован",
    title: "4 спальнями",
    price: "3 900 000",
    left: "Х квартир!",
    image: "/Interior/Hado_4BR_Duplex.png",
  },
];

export default function FloorPlans() {
  const [active, setActive] = useState("interior");
  const [selectedInterior, setSelectedInterior] = useState(null);

  return (
    <Section>
      <Intro>
        <Text variant="h3">
          <Highlighted>Лучшие планировки в HADO</Highlighted>
        </Text>

        <Text variant="p-med" align="justify">
          Насладитесь видом на бескрайний горизонт с бирюзовым морем и красивыми
          яхтами. Прогуливайтесь по белоснежному песку в утренние или вечерние
          часы. Каждый вечер наблюдайте за закатом, ощущая внутреннее
          спокойствие и силу для начала нового дня.
        </Text>
      </Intro>

      <ButtonWraper>
        <ButtonIMG
          we
          imgSrc="/Interior/Hado_1BR.png"
          onClick={() => setActive("interior")}
        >
          Интерьер
        </ButtonIMG>
        <ButtonIMG
          we
          imgSrc="/Exterior/1.jpg"
          onClick={() => setActive("exterior")}
        >
          Экстерьер
        </ButtonIMG>
      </ButtonWraper>

      <CardsWrapper>
        {active === "interior" &&
          interiorData.map((item, index) => (
            <CardINT key={index} delay={`${index * 0.1}s`}>
              <CardTag>{item.tag}</CardTag>
              <CardImage src={item.image} />
              <CardDescription>
                Квартира с <span>{item.title}</span> <br />
                Цена от <span>{item.price}</span> <br />
                Осталось {item.left}
              </CardDescription>
              <CardButton onClick={() => setSelectedInterior(item.image)}>
                Подробнее
              </CardButton>
            </CardINT>
          ))}

        {active === "exterior" &&
          exteriorData.map((src, index) => (
            <CardEXT
              key={index}
              delay={`${index * 0.1}s`}
              onClick={() => setSelectedInterior(src)} // 🔹 при клике открываем модальное
            >
              <CardImage src={src} />
            </CardEXT>
          ))}
      </CardsWrapper>

      {selectedInterior && (
        <ModalOverlay onClick={() => setSelectedInterior(null)}>
          <ModalImage src={selectedInterior} />
        </ModalOverlay>
      )}
    </Section>
  );
}
