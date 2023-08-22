import React, { useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";
import SvgAbout from "../../assets/svg/About";

function Intro() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(true);
  };
  return (
    <Wrapper>
      <Banner>
        <Title>
          <span style={{ fontSize: "28px" }}>
            <span style={{ fontSize: "58px" }}>세론</span>
            <br />
            세상에 대해 이야기 하는 곳
          </span>
        </Title>
        <SubTitle>
          <b>세론</b>은 <b>대학생</b>이라면 누구나 <br />
          참여할 수 있는 <b>연합 동아리</b> 입니다.
        </SubTitle>
        <Button onClick={handleOpen}>10기 모집 알림 신청</Button>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </Banner>
      <SvgAbout />
    </Wrapper>
  );
}

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  margin-bottom: 50px;
  white-space: nowrap;
`;

const SubTitle = styled.span`
  font-size: 20px;
  margin: 20px 0;
`;

const Title = styled.span`
  font-size: 56px;
  font-weight: bold;
`;

const Wrapper = styled.section`
  height: 500px;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 200px;
  svg {
    flex-shrink: 1;
    width: 360px;
  }
`;

const Button = styled.button`
  width: fit-content;
  height: 50px;
  background-color: #7cbae3;
  border-radius: 10px;
  font-weight: bold;
  flex-shrink: 1;
  border: none;
  color: #ffffff;
  font-size: 20px;
  height: 70px;
  padding: 0 30px;
  &:hover {
    background-color: #74b0d8;
    cursor: pointer;
  }
`;
export default Intro;
