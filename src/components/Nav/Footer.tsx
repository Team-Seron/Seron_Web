import { styled } from "styled-components";
import Menu from "./Menu";
import { Instagram } from "@mui/icons-material";
function Footer() {
  return (
    <Wrapper>
      <Section>
        <Title>Seron</Title>
        <Menu />
        <Icons>
          <Instagram />
        </Icons>
      </Section>
    </Wrapper>
  );
}

const Icons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: black;
  font-family: "Noto Sans KR", sans-serif;
`;

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
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  /* transform: translateY(-100%); */
  background-color: aliceblue;
`;

export default Footer;
