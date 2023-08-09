import React from "react";
import { styled } from "styled-components";
import Intro from "../components/Body/Intro";
import Accordion from "../components/Body/Accordion";
import { FAQs } from "../../public/data/FAQ";

interface qnaProps {
  id: number;
  question: string;
  answer: string;
}

function MainPage() {
  return (
    <>
      <Section>
        <Intro />
      </Section>
      <Section>
        <Title>자주 묻는 질문</Title>

        {FAQs.map((qna: qnaProps) => (
          <div key={qna.id}>
            <Accordion title={qna.question} content={qna.answer} />
          </div>
        ))}
      </Section>
    </>
  );
}

const Title = styled.div`
  font-size: 44px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Section = styled.section`
  height: 500px;
  padding: 50px 142px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MainPage;
