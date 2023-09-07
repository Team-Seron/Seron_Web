import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import SvgSLogo from "../../assets/svg/SLogo";
import SvgSearonLogo from "../../assets/svg/SearonLogo";

function Nav() {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <Icon onClick={() => navigate("/")}>
        <SvgSearonLogo />
      </Icon>
      <Menu />
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  height: 72px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: pretendard;
  display: flex;
  align-items: center;
  gap: 50vw;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 1000px) {
    gap: 10px;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 5%;
  }
`;

const Icon = styled.div`
  justify-content: center;
  svg {
    width: 52px;
    height: 52px;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    svg {
      width: 90px;
      height: 90px;
      padding-top: 15%;
    }
  }
`;

export default Nav;
