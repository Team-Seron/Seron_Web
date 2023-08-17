<<<<<<< HEAD
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
  gap: 650px;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
`;

const Icon = styled.div`
  justify-content: center;
  svg {
    width: 52px;
    height: 52px;
    cursor: pointer;
  }
`;

export default Nav;
=======
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
  gap: 650px;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
`;

const Icon = styled.div`
  justify-content: center;
  svg {
    width: 52px;
    height: 52px;
    cursor: pointer;
  }
`;

export default Nav;
>>>>>>> 2311233f782c5251c94a4fa3de5970de965e3c02
