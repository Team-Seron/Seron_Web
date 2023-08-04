import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

interface Props {
  title: string;
  content: string;
}

function Accordion({ title, content }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "lightgray";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText =
    parentRefHeight === "0px" ? <VscTriangleDown /> : <VscTriangleUp />;

  return (
    <>
      <Container>
        <Header onClick={handleButtonClick}>
          {title}
          <Button>{buttonText}</Button>
        </Header>
        <ContentsWrapper ref={parentRef}>
          <Contents ref={childRef}>{content}</Contents>
        </ContentsWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid silver;
  min-width: 300px;
  width: 90vw;
  margin: 0 0 16px 0;
  padding: 8px;
  &:hover {
    transform: translateY(-5px);
    transition: transform 0s ease;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 32px;
  margin: 0 32px 0 8px;
`;

const Button = styled.div`
  top: 8px;
  right: 8px;
  font-size: 14px;
  position: absolute;
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  padding: 0 8px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  padding: 0.1px;
`;

export default Accordion;
