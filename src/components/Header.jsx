import styled from "styled-components";
import { ButtonBeigeBlackIcon } from ".././assets/ButtonBeigeBlackIcon";
import { Text } from "../assets/Text";
import { ArrowUp } from "lucide-react";
import { Download } from "lucide-react";
import { respond } from "../Breakpoints";

const Section = styled.section`
  width: 100%;
`;

const MenuBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  ${respond("tab-port")} {
    display: none;
  }
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuItem = styled.a`
  list-style: none;
  white-space: nowrap;
  padding: 1.5rem 2rem;
  border-radius: 3rem;
  border: 1px solid var(--color-button-beige);
  background-color: var(--color-button-beige);
  cursor: pointer;
  text-align: center;
  font-family: var(--font-main);
  font-size: 1.6rem;
  transition: all 0.5s ease-in-out;
  font-family: var(--font-main);

  &:hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-black);
  }
`;

const HeroIMG = styled.header`
  width: 100%; // растягиваем по ширине экрана
  aspect-ratio: 118 / 60; // сохраняем исходное соотношение сторон
  background-image: url("/Hero-img.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 946px) {
    background-image: url("/Hero-img-2.png");
    border-radius: 5rem;
  }

  ${respond("s-phone")} {
    background-image: url("/Hero-img-3.png");
    height: 70rem;
    border-radius: 5rem;
    padding: 2rem;
  }
`;

const ButtonPosition = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  z-index: 4000;
`;

const BoxIMG = styled.div`
  background-image: url("/Hero-img-small.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 18rem;
  max-width: 35rem;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 946px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 80%;
  top: 80%;
  transform: translateY(-50%);
`;

export default function Header() {
  return (
    <Section>
      <MenuBox>
        <MenuItems>
          <MenuItem>О районе SIØRA</MenuItem>
          <MenuItem>Локация</MenuItem>
          <MenuItem>О проекте HADO</MenuItem>
          <MenuItem>План оплаты</MenuItem>
          <MenuItem>Контакты</MenuItem>
        </MenuItems>

        <MenuItems>
          <MenuItem>Заказать з вонок</MenuItem>
        </MenuItems>
      </MenuBox>

      <HeroIMG>
        <ButtonPosition>
          <Text variant="p-big">
            Новая эпоха прибрежной жизни в <br /> японском стиле в премиальном
            районе SIØRA, Dubai Islands
          </Text>
          <Text variant="h1" noWrap>
            HADO by Beyond
          </Text>
          <ButtonBeigeBlackIcon icon={<Download />}>
            Получить презентацию
          </ButtonBeigeBlackIcon>
        </ButtonPosition>

        <BoxIMG>
          <Text variant="h4">🚀 СТАРТ ПРОДАЖ —15 ДЕКАБРЯ 2025</Text>
          <IconWrapper>
            <ArrowUp style={{ transform: "rotate(130deg)" }} />
          </IconWrapper>
        </BoxIMG>
      </HeroIMG>
    </Section>
  );
}
