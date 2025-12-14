import styled from "styled-components";
import { Text } from "../assets/Text";
import { IconSocial } from "../assets/ButtonBeigeWhiteIcon";

const Footer = styled.footer`
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 5rem;

  border-radius: 3rem;
  border: 1px solid #000;
  background: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 0 0 20%;
  min-width: 250px;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 0 0 20%;
  min-width: 250px;
  margin-right: 3rem;
`;

const SocialMedia = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: start;
  align-items: center;
  gap: 1.5rem;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-light);
  border-radius: var(--border-radius-lg);
  width: 100%;
  gap: 2rem;
`;

const ContactButton = styled.a`
  display: inline-flex;
  padding: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background: #c9b499;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  color: #000;
  white-space: nowrap;
  font-family: "Montserrat";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-button-hover);
    border: 1px solid black;
  }
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function FooterMenu() {
  return (
    <Footer id="contacts">
      <FooterContainer>
        <Container1>
          <Text variant="p-med" weight="bold" align="left">
            Контакты
          </Text>

          <NavBox>
            <Text variant="p-med" align="left">
              Moscow, <br /> Example Street, 1
            </Text>

            <Text variant="p-med" align="left">
              +971 56 772 9022
            </Text>

            <Text variant="p-med" align="left">
              info@domain.com
            </Text>
          </NavBox>

          <SocialMedia>
            <IconSocial iconSrc="/Telegram.svg" />
            <IconSocial iconSrc="/WhatsApp.svg" />
          </SocialMedia>

          <QuestionBox>
            <Text variant="p-med" align="left">
              Есть вопросы или предложения?
            </Text>
            <ContactButton>Обратный звонок</ContactButton>
          </QuestionBox>
        </Container1>

        <Container>
          <Text variant="p-med" weight="bold" align="left">
            Район SIØRA
          </Text>
          <NavBox>
            <Text variant="p" align="left">
              Pre-Launch
            </Text>
            <Text variant="p" align="left">
              О районе SIØRA
            </Text>
            <Text variant="p" align="left">
              Инфраструктура
            </Text>
            <Text variant="p" align="left">
              Локация
            </Text>
          </NavBox>
        </Container>

        <Container>
          <Text variant="p-med" weight="bold" align="left">
            Проект HADO
          </Text>
          <NavBox>
            <Text variant="p" align="left">
              О проекте HADO
            </Text>
            <Text variant="p" align="left">
              Экстерьер
            </Text>
            <Text variant="p" align="left">
              Интерьер
            </Text>
            <Text variant="p" align="left">
              План оплаты
            </Text>
            <Text variant="p" align="left">
              Вопросы
            </Text>
            <Text variant="p" align="left">
              Контакты / Запрос
            </Text>
          </NavBox>
        </Container>
      </FooterContainer>
    </Footer>
  );
}
