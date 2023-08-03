import React, { useState } from "react";
import { styled } from "styled-components";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title onClick={handleOpen}>자주 묻는 질문</Title>
      <Question>Q:모집 및 활동일정이 궁금해요</Question>
      <Answer>
        A:모집일정은 9월 1일부터 9월 10일까지이며, 활동일정은 9월 11일부터 9월
        30일까지입니다.
      </Answer>
    </div>
  );
}

const Title = styled.span`
  font-size: 44px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Question = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 70vw;
  height: 50px;
  padding: 20px;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Answer = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 70vw;
  height: 50px;
  padding: 20px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: start;
`;
// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
