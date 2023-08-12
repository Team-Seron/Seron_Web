import React from "react";
import Intro from "./Intro";
import { styled } from "styled-components";
import Accordion from "./Accordion";
import { FAQs } from "../../../public/data/FAQ";
import MuiAccordion from "./MuiAccordion";

type qnatype = {
  id: number;
  question: string;
  answer: string;
};

function Body() {
  return (
    <>
      <Section>
        <Intro />
      </Section>
      <Section>
        <Title>자주 묻는 질문</Title>
        {FAQs.map((qna: qnatype) => (
          <div key={qna.id}>
            <MuiAccordion title={qna.question} content={qna.answer} />
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

export default Body;
