import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { Text } from "../assets/Text";
import { Plus, Minus } from "lucide-react";
import { Button } from "../assets/ButtonBeigeWhiteIcon";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

const Questions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
`;

const FAQCard = styled.div`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  border: 1px solid #000;
  background: #fff;
  overflow: hidden;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
`;

const ToggleIcon = styled.div`
  display: flex;
  width: 4.1135rem;
  height: 4.1135rem;
  justify-content: center;
  align-items: center;
  border-radius: 999.9rem;
  background: #000;
  color: #fff;
  font-size: 2rem;
  transition: transform 0.3s ease;
`;

const AnswerWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  max-height: ${({ open, contentHeight }) =>
    open ? `${contentHeight + 32}px` : "0"}; /* добавляем 32px под padding */
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

const AnswerContent = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.5rem;
  padding: 1rem 2.4rem 2rem 2.4rem;
`;

const faqData = [
  {
    question: "01. Будет ли перепродажа до строительства?",
    answer:
      "Preventative care includes routine check-ups, vaccinations, and health screenings. These services help detect potential health issues early. Keeping your pet healthy is our top priority.",
  },
  {
    question: "02. Почему остров лучше Palm Jumeirah?",
    answer: "Ответ на вопрос 2",
  },
  {
    question: "03. Есть ли аналоги проекта?",
    answer: "Ответ на вопрос 3",
  },
  {
    question: "04. Когда планируется сдача HADO?",
    answer: "Ответ на вопрос 4",
  },
  {
    question: "05. Какие типы резиденций предлагаются?",
    answer: "Ответ на вопрос 5",
  },
  {
    question: "06. Какие преимущества инфраструктуры района SIØRA?",
    answer: "Ответ на вопрос 6",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // первый открыт по умолчанию
  const [heights, setHeights] = useState([]);
  const refs = useRef([]);

  // Вычисляем высоты ответов
  useEffect(() => {
    const h = refs.current.map((ref) => (ref ? ref.scrollHeight : 0));
    setHeights(h);
  }, [openIndex]);

  const toggleQuestion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section>
      <Text variant="h3" weight="500">
        Ответим на все ваши вопросы и <br /> предложим лучший вариант!
      </Text>

      <Questions>
        {faqData.map((item, index) => (
          <FAQCard key={index}>
            <QuestionWrapper>
              <QuestionHeader onClick={() => toggleQuestion(index)}>
                <Text variant="p-med" align="left">
                  {item.question}
                </Text>
                <ToggleIcon>
                  {openIndex === index ? <Minus /> : <Plus />}
                </ToggleIcon>
              </QuestionHeader>

              <AnswerWrapper
                open={openIndex === index}
                contentHeight={heights[index]}
              >
                <AnswerContent ref={(el) => (refs.current[index] = el)}>
                  <Text variant="p" align="left">
                    {item.answer}
                  </Text>
                </AnswerContent>
              </AnswerWrapper>
            </QuestionWrapper>
          </FAQCard>
        ))}
      </Questions>

      <ButtonWrapper>
        <Button iconSrc="/phone.svg">Обратный звонок</Button>
        <Button iconSrc="/WhatsApp.svg">WhatsApp</Button>
        <Button iconSrc="/Telegram.svg">Telegramm</Button>
      </ButtonWrapper>
    </Section>
  );
}
