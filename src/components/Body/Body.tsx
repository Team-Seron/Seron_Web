import React from "react";
import Intro from "./Intro";
import { styled } from "styled-components";
import { FAQs } from "../../../public/data/FAQ";
import MuiAccordion from "./MuiAccordion";

type qnatype = {
  id: number;
  question: string;
  answer: string;
};

function Body() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 150px;
  height: auto;
  min-height: 100%;
`;

const Title = styled.div`
  font-size: 44px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Section = styled.section`
  padding: 50px 142px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Body;
