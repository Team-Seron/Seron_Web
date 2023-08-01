import React, { useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";

function Body() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Section>
        <h1>
          토론의 즐거움을 세론과 함께하세요 !<br /> 테스트에게 기회를
        </h1>
        <Button onClick={handleOpen}>10기 모집 알림 신청하기</Button>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </Section>
    </div>
  );
}

const Section = styled.section`
  height: 500px;
  padding: 50px 142px;
  background-color: antiquewhite;
  min-width: 300px;
`;
const Button = styled.button`
  width: fit-content;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid #000000;
  border-radius: 10px;
  font-weight: bold;
  flex-shrink: 1;

  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
export default Body;
