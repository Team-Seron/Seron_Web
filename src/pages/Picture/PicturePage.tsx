import React, { useEffect, useState } from "react";
import * as S from "../Style";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Pagination } from "@mui/material";
import { styled } from "styled-components";
import useOnclickOutside from "react-cool-onclickoutside";
import axios from "axios";
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

function PicturePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({ results: [] });
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetch(`v1/databases/bcf3ad2776a94af886ba97d3e465d7bf/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTION_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
  }).then(res => res.json())
  .then(data => setData(data))
  .catch(err => console.log(err))
  }, []);

  const handleCard = (pageId, title) => {
    setModalOpen(true);
    setId(pageId);
    setTitle(title);
  }

  const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return (
    <S.Body>
      {modalOpen && <PictureModal id={id} title={title} onClose={() => setModalOpen(false)} />}
      <div>
        <div style={{ margin: '50px'}}>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <h1>활동사진</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2} style={{ maxWidth: '1084px' }}>
              {data && data.results.slice((page-1)*9, page*9).map((result) => (
                <Grid item xs={4} key={result.id}>
                  <Card sx={{ maxWidth: '369px' }} variant="outlined" >
                    <CardActionArea onClick={() => handleCard(result.id, result.properties.Name.title[0]?.plain_text)}>
                      <CardMedia 
                        component="img"
                        height="194"
                        image={result.cover?.file.url}
                        alt="image"
                      />
                      <CardContent>
                        {result.properties.Name.title[0]?.plain_text}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          <Pagination count={Math.ceil((data && data?.results.length/9))} page={page} shape="rounded" onChange={handlePagination} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}} />
        </div>
      </div>
    </S.Body>
  );
}

export default PicturePage;

interface PictureModalProps {
  onClose: () => void;
  id: string;
  title: string;
}

const PictureModal = ({
  onClose,
  id,
  title
}: PictureModalProps) => {
  const ref = useOnclickOutside(onClose);
  const [pageDatas, setPageDatas] = useState({});

  useEffect(() => {
    void axios.get(`https://notion-api.splitbee.io/v1/page/${id}`)
      .then(res => setPageDatas(res.data));
  }, [id])

  return(
    <ModalWrapper>
      <Modals ref={ref}>
        <Header>
          <CloseModal onClick={onClose}>
            <img
              src="../images/CancelIcon.png"
              alt="cancelIcon"
              width="16px"
              height="16px"
            />
          </CloseModal>
        </Header>
        <h1>{title}</h1>
        <NotionRenderer blockMap={pageDatas} fullPage={false}/>
      </Modals>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
width: 100vw;
height: 100vh;
top: 0;
left: 0;
position: fixed;
align-items: center;
background-color: #00000023;
justify-content: center;
display: flex;
z-index: 1;
::-webkit-scrollbar {
  display: none;
} 
`;

const Modals = styled.div`
position: relative;
width: 40%;
height: 80%;
box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
  0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
background-color: white;
overflow-y: scroll;
border-radius: 8px;
transition: all 400ms ease-in-out 2s;
animation: fadeIn 400ms;
-ms-overflow-style: none; /* IE and Edge */
scrollbar-width: none; /* Firefox */
z-index: 2;
padding: 24px 36px;
`;

const Header = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

// hover 수정 필요
const CloseModal = styled.div`
  :hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
  position: absolute;
  right: 2rem;
  top: 20px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;