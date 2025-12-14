import styled from "styled-components";
import { Text, Highlighted } from "../assets/Text";
import { ButtonBeigeBlackIcon } from ".././assets/ButtonBeigeBlackIcon";
import { Download } from "lucide-react";

// data/sioraPhilosophyData.js
const sioraPhilosophyData = [
  {
    id: 1,
    tag: "Принцип 1",
    title: "Гармония жизни",
    description: "Спокойствие, естественный свет, приватность.",
    image: "/PhilosophyIMG/Philosophy1.png",
  },
  {
    id: 2,
    tag: "Принцип 2",
    title: "Здоровый образ жизни",
    description:
      "Фитнес-площадки, jogging tracks, медитационные зоны, зелёные парки.",
    image: "/PhilosophyIMG/Philosophy2.png",
  },
  {
    id: 3,
    tag: "Принцип 3",
    title: "Скандинавско-японская эстетика",
    description:
      "Минимализм, натуральные материалы, тёплые тона, архитектурная чистота.",
    image: "/PhilosophyIMG/Philosophy3.png",
  },
];

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

const Card = styled.div`
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Tag = styled.span`
  display: flex;
  width: 13rem;
  height: 4rem;
  padding: 1.4rem 3.3rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
  white-space: nowrap;
  border-radius: 1.8rem;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-size: 1.6rem;
  font-weight: 400;
`;

const Image = styled.div`
  width: 100%;
  height: 29rem;
  border-radius: 2rem;
  background: url(${(props) => props.image}) center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13rem 4rem 4rem 4rem;
`;

const TextWraper = styled.div`
  max-width: 29rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export default function SioraPhilosophy() {
  return (
    <Section>
      <Text variant="h3">
        Философия района строится <br />
        <Highlighted>на трёх принципах:</Highlighted>
      </Text>

      <Wrapper>
        {sioraPhilosophyData.map((item) => (
          <Card key={item.id}>
            <Tag>{item.tag}</Tag>

            <Image image={item.image}>
              <TextWraper>
                <Text variant="p-med" weight="600" align="left">
                  {item.title}
                </Text>
                <Text variant="p" align="left">
                  {item.description}
                </Text>
              </TextWraper>
            </Image>
          </Card>
        ))}
      </Wrapper>

      <ButtonBeigeBlackIcon icon={<Download />} align="center">
        Получить презентацию
      </ButtonBeigeBlackIcon>
    </Section>
  );
}
