import { styled } from "styled-components";
import Menu from "./Menu";
import { GitHub, Instagram } from "@mui/icons-material";
import SvgNotionLogo from "../../assets/svg/NotionLogo";
import { SearonLogo } from "../../assets";
function Footer() {
  return (
    <Wrapper>
      <Section>
        <Top>
          <Title>Seron</Title>
          <Menu />
        </Top>
        <Bottom>
          <Icon>
            <Instagram
              onClick={() => {
                location.href = "https://www.instagram.com/seron_official/";
              }}
              fontSize="large"
            />
            <GitHub
              onClick={() => {
                location.href = "https://github.com/Team-Seron/Seron_Web";
              }}
              fontSize="large"
            />
            <SvgNotionLogo
              onClick={() => {
                location.href = "https://url.kr/y5plzk";
              }}
              width="35px"
            />
          </Icon>
        </Bottom>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  margin: 0 auto;
`;

const Section = styled.div`
  height: 150px;
  border-top: 1px solid #f0f0f0;
  bottom: 0;
  padding: 20px 50px;

  @media (max-width: 1000px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: black;
  font-family: "Noto Sans KR", sans-serif;
  /* margin-right: 120px; */
`;

const Top = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
    /* margin: 50px; */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Bottom = styled.div`
  height: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default Footer;
