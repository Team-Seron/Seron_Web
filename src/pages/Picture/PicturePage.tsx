import React from "react";
import Nav from "../../components/Nav/Nav";
import { Card, CardContent, CardMedia, Grid, Pagination } from "@mui/material";

function PicturePage() {
  return (
    <div>
      <Nav />
      <div style={{ margin: '100px'}}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <h1>활동사진</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} style={{ maxWidth: '1084px' }}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia 
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  제 10회 전국대학생 인구토론대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia 
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  신한 AI서비스 아이디어 경진대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  2023 통일 모의국무회의 경연대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  2023 통일 모의국무회의 경연대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  2023 통일 모의국무회의 경연대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  2023 통일 모의국무회의 경연대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  2023 통일 모의국무회의 경연대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  2023 통일 모의국무회의 경연대회
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: '369px' }} variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image="/src/assets/png/SearonBackground.png"
                  alt="image"
                />
                <CardContent>
                  2023 통일 모의국무회의 경연대회
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <Pagination count={10} shape="rounded" sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}/>
      </div>
    </div>
  );
}

export default PicturePage;
