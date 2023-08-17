import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <Menus>
      <Category onClick={() => navigate("/")}>홈</Category>
      <Category onClick={() => navigate("/debate")}>토론젝트</Category>
      <Category onClick={() => navigate("/picture")}>활동사진</Category>
    </Menus>
  );
}

const Menus = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`;

const Category = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  min-width: fit-content;
`;

export default Menu;
