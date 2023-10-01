import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import px2vw from '../utils/px2vw';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AppForm from '../components/AppForm';
import AppBreadCrumbs from '../components/AppBreadCrumbs';

export default function Projects() {
  const [data, setData] = useState(null);
  const [dataBack, setDataBack] = useState(null);
  const [dataFront, setDataFront] = useState(null);
  const [dataMix, setDataMix] = useState(null);
  const [selectBack, setSelectBack] = useState(false);
  const [selectFront, setSelectFront] = useState(false);
  const [displayProjectData, setDisplayProjectData] = useState(null);
  function clickResetAll() {
    setSelectBack(false);
    setSelectFront(false);
    if (data) {
      showData(data);
    }
  }
  function clickSelectBack() {
    if (selectBack) {
      setSelectBack(false);
      if (selectFront) {
        console.log('displaying front');
        showData(dataFront);
      } else {
        console.log('displaying all');
        showData(data);
      }
    } else {
      setSelectBack(true);
      if (selectFront) {
        console.log('displaying mix');
        showData(dataMix);
      } else {
        console.log('displaying back');
        showData(dataBack);
      }
    }
  }
  function clickSelectFront() {
    if (selectFront) {
      setSelectFront(false);
      if (selectBack) {
        console.log('displaying back');
        showData(dataBack);
      } else {
        console.log('displaying all');
        showData(data);
      }
    } else {
      setSelectFront(true);
      if (selectBack) {
        console.log('displaying mix');
        showData(dataMix);
      } else {
        console.log('displaying front');
        showData(dataFront);
      }
    }
  }
  function showData(dataType) {
    setDisplayProjectData(
      dataType.map((items) => {
        return (
          <Grid item key={items.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                boxShadow: 5,
                borderRadius: px2vw(15),
                backgroundColor: '#22242E',
                color: '#ffffff'
              }}>
              <CardMedia
                component="div"
                sx={{
                  height: {
                    xs: px2vw(750),
                    sm: px2vw(500),
                    md: px2vw(250)
                  }
                }}
                image={items.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  {items.title}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {items.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                {items.categories.length === 1 ? (
                  <Typography variant="caption" align="right">
                    {items.categories[0].name}
                  </Typography>
                ) : (
                  <Typography variant="caption" align="right">
                    {items.categories[0].name}, {items.categories[1].name}
                  </Typography>
                )}
              </CardActions>
            </Card>
          </Grid>
        );
      })
    );
  }
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await axios.get('https://backend.cyberia.studio/api/v1/projects');
      const tempData = response.data;
      setData(tempData.items);
      setDataBack(
        tempData.items.filter((item) => {
          return (
            item.categories.filter((category) => category.id === 12) &&
            item.categories.filter((category) => category.id === 12).length !== 0
          );
        })
      );
      setDataFront(
        tempData.items.filter((item) => {
          return (
            item.categories.filter((category) => category.id === 13) &&
            item.categories.filter((category) => category.id === 13).length !== 0
          );
        })
      );
      setDataMix(
        tempData.items.filter((item) => {
          return item.categories.length > 1 && item.categories.length !== 0;
        })
      );
      clickResetAll();
      showData(tempData.items);
    } catch (e) {
      setDisplayProjectData('No data found');
      console.error('Произошла ошибка', e);
    }
  }

  return (
    <>
      {/*Хедер*/}
      <AppHeader></AppHeader>
      <main>
        {/*Проекты*/}
        <Box
          sx={{
            pt: 20
          }}>
          <Container maxWidth="false" sx={{ ml: px2vw(200), mr: px2vw(200), width: 'inherit' }}>
            <AppBreadCrumbs currentPage="Проекты" />
            <Typography
              variant="h4"
              align="left"
              color="#ffffff"
              gutterBottom
              sx={{ fontWeight: 'bold' }}>
              Проекты
            </Typography>
            <Box
              sx={{
                mt: 10,
                display: 'flex',
                flex: '1 1 0px',
                flexWrap: 'wrap',
                gap: px2vw(40),
                justifyContent: 'flex-start'
              }}>
              <Button
                variant={selectBack || selectFront ? 'outlined' : 'contained'}
                onClick={clickResetAll}
                sx={{ color: '#ffffff' }}>
                Показать все
              </Button>
              <Button
                variant={!selectBack ? 'outlined' : 'contained'}
                onClick={clickSelectBack}
                sx={{ color: '#ffffff' }}>
                Backend
              </Button>
              <Button
                variant={!selectFront ? 'outlined' : 'contained'}
                onClick={clickSelectFront}
                sx={{ color: '#ffffff' }}>
                Frontend
              </Button>
            </Box>

            <Container sx={{ py: 10 }} maxWidth="md">
              <Grid container spacing={4}>
                {displayProjectData}
              </Grid>
            </Container>
          </Container>
        </Box>

        {/*Форма обратной связи*/}
        <AppForm></AppForm>
      </main>
      {/*Футер*/}
      <AppFooter></AppFooter>
    </>
  );
}
