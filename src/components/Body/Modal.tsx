<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from "react";
import { styled } from "styled-components";
import useOnclickOutside from "react-cool-onclickoutside";
import { useForm } from "react-hook-form";

interface ModalProps {
  setModalOpen: (modalOpen: boolean) => void;
}

type FormInputs = {
  email: string;
};

function Modal({ setModalOpen }: ModalProps) {
  const ref = useOnclickOutside(() => {
    setModalOpen(false);
  });

  const {
    register,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onChange" });

  return (
    <ModalWrapper>
      <Modals ref={ref}>
        <Header>
          10기 모집 알림 신청하기
          <CloseModal onClick={() => setModalOpen(false)}>
            <img
              src="../images/CancelIcon.png"
              alt="cancelIcon"
              width="16px"
              height="16px"
            />
          </CloseModal>
        </Header>
        <SubTitle>
          <p style={{ fontWeight: "bold" }}>9기 모집</p>이 완료되었습니다. 😁
        </SubTitle>
        <SubTitle>10기 모집이 시작되면 이메일로 알려드릴게요.</SubTitle>
        <EmailInput>
          <span>
            <p>이메일&nbsp;</p>
            <p style={{ color: "red" }}>*</p>
          </span>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && (
            <p
              style={{
                fontFamily: "pretendard",
                color: "red",
                margin: "5px 10px",
                fontSize: "8px",
              }}
            >
              {errors.email.message}
            </p>
          )}
          <SubmitEmailBtn>제출</SubmitEmailBtn>
        </EmailInput>
      </Modals>
    </ModalWrapper>
  );
}

const SubmitEmailBtn = styled.button`
  margin-top: 1rem;
  height: 32px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0 0.5rem;
  font-size: 14px;
  background-color: #ffffff;
  color: #000000;
  :hover {
    cursor: pointer;
    background-color: #563fd7;
  }
`;

const EmailInput = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    margin-top: 2rem;
    p {
      margin: 0;
      font-size: 16px;
      font-weight: 300;
      /* color: "black"; */
    }
  }
  input {
    margin-top: 0.5rem;
    height: 32px;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0 0.5rem;
    font-size: 14px;
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  align-items: center;
  background-color: #00000023;
  justify-content: center;
  display: flex;
  z-index: 1;
`;

const Modals = styled.div`
  position: relative;
  width: 540px;
  height: 340px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  z-index: 2;
  padding: 24px 36px;
`;

const Header = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

// hover 수정 필요
const CloseModal = styled.div`
  :hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
  position: absolute;
  right: 2rem;
  top: 20px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
`;

export default Modal;
=======
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from "react";
import { styled } from "styled-components";
import useOnclickOutside from "react-cool-onclickoutside";
import { useForm } from "react-hook-form";

interface ModalProps {
  setModalOpen: (modalOpen: boolean) => void;
}

type FormInputs = {
  email: string;
};

function Modal({ setModalOpen }: ModalProps) {
  const ref = useOnclickOutside(() => {
    setModalOpen(false);
  });

  const {
    register,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onChange" });

  return (
    <ModalWrapper>
      <Modals ref={ref}>
        <Header>
          10기 모집 알림 신청하기
          <CloseModal onClick={() => setModalOpen(false)}>
            <img
              src="../images/CancelIcon.png"
              alt="cancelIcon"
              width="16px"
              height="16px"
            />
          </CloseModal>
        </Header>
        <SubTitle>
          <p style={{ fontWeight: "bold" }}>9기 모집</p>이 완료되었습니다. 😁
        </SubTitle>
        <SubTitle>10기 모집이 시작되면 이메일로 알려드릴게요.</SubTitle>
        <EmailInput>
          <span>
            <p>이메일&nbsp;</p>
            <p style={{ color: "red" }}>*</p>
          </span>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && (
            <p
              style={{
                fontFamily: "pretendard",
                color: "red",
                margin: "5px 10px",
                fontSize: "8px",
              }}
            >
              {errors.email.message}
            </p>
          )}
          <SubmitEmailBtn>제출</SubmitEmailBtn>
        </EmailInput>
      </Modals>
    </ModalWrapper>
  );
}

const SubmitEmailBtn = styled.button`
  margin-top: 1rem;
  height: 32px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0 0.5rem;
  font-size: 14px;
  background-color: #ffffff;
  color: #000000;
  :hover {
    cursor: pointer;
    background-color: #563fd7;
  }
`;

const EmailInput = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    margin-top: 2rem;
    p {
      margin: 0;
      font-size: 16px;
      font-weight: 300;
      /* color: "black"; */
    }
  }
  input {
    margin-top: 0.5rem;
    height: 32px;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0 0.5rem;
    font-size: 14px;
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  align-items: center;
  background-color: #00000023;
  justify-content: center;
  display: flex;
  z-index: 1;
`;

const Modals = styled.div`
  position: relative;
  width: 540px;
  height: 340px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  z-index: 2;
  padding: 24px 36px;
`;

const Header = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

// hover 수정 필요
const CloseModal = styled.div`
  :hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
  position: absolute;
  right: 2rem;
  top: 20px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
`;

export default Modal;
>>>>>>> 2311233f782c5251c94a4fa3de5970de965e3c02
