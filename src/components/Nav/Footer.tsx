import React from "react";
import { styled } from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Section></Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 150px;
  border-top: 1px solid gray;
  bottom: 0;
  position: relative;
  /* transform: translateY(-100%); */
  background-color: aliceblue;
`;

export default Footer;
