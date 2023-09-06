import Intro from "./Intro";
import { styled } from "styled-components";
import { FAQs } from "../../../public/data/FAQ";
import MuiAccordion from "./MuiAccordion";
import { Instagram } from "../../instagram/instagram";

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
      <Section>{/* <Instagram /> */}</Section>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={() => {
            location.href = "https://www.instagram.com/seron_official/";
          }}
        >
          인스타 바로가기
        </Button>
        <Button
          type="button"
          onClick={() => {
            location.href = "https://url.kr/6c8i13";
          }}
        >
          노션 바로가기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-bottom: 150px;
  height: auto;
  min-height: 100%;
  width: 75%;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 50px;
  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 3px solid white;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #74b0d8;
    transition: 0.5s;
    color: white;
  }
`;

const Title = styled.div`
  font-size: 44px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Section = styled.section`
  /* padding: 50px 142px; */
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px, 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      /* width: 360px; */
    }
  }
`;

export default Body;

