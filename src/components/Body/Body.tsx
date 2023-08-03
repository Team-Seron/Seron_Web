import React from "react";
import Intro from "./Intro";
import { styled } from "styled-components";
import FAQ from "./FAQ";

function Body() {
  return (
    <>
      <Section>
        <Intro />
      </Section>
      <Section>
        <FAQ />
      </Section>
    </>
  );
}

const Section = styled.section`
  height: 500px;
  padding: 50px 142px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Body;
