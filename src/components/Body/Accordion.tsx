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
<<<<<<< HEAD
    (event: { stopPropagation: () => void }) => {
=======
    (event: React.MouseEvent) => {
>>>>>>> 96fb9613a2df44789a47f2357770c9ebb043edff
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px `;
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
          Q : {title}
          <Button>{buttonText}</Button>
        </Header>
        <ContentsWrapper ref={parentRef}>
          <Contents ref={childRef}> A : {content}</Contents>
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
  font-size: 20px;
  min-width: 300px;
  width: 60vw;
  margin: 0 0 16px 0;
  &:hover {
    transform: translateY(-3px);
    transition: transform 0s ease;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

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
  padding: 10px;
`;

export default Accordion;
