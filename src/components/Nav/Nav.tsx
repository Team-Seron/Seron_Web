import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import SvgSearonLogo from "../../assets/svg/SearonLogo";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "72px",
        color: "black",
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "pretendard",
        display: "flex",
        gap: "24px",
        alignItems: "center",
        padding: "0 142px",
        justifyContent: "space-between",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <Icon onClick={() => navigate("/")}>
        <SvgSearonLogo />
      </Icon>
      <Menu />
    </div>
  );
}

const Icon = styled.div`
  justify-content: center;
  svg {
    width: 52px;
    height: 52px;
    cursor: pointer;
  }
`;

export default Nav;
