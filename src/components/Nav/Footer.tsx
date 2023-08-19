import { styled } from "styled-components";
import Menu from "./Menu";
import { Instagram } from "@mui/icons-material";
function Footer() {
  return (
    <Wrapper>
      <Section>
        <Top>
          <Title>Seron</Title>
          <Menu />
        </Top>
        <Bottom>
          <Instagram />
        </Bottom>
      </Section>
    </Wrapper>
  );
}

const Section = styled.div`
  height: 150px;
  border-top: 1px solid gray;
  bottom: 0;
  padding: 20px 50px;
`;

const Bottom = styled.div`
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
  margin-right: 120px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  background-color: aliceblue;
`;

const Top = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  /* transform: translateY(-100%); */
`;

export default Footer;
