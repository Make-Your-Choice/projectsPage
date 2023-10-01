import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import px2vw from '../utils/px2vw';
import { styled } from '@mui/material/styles';

function Footer() {
  const TypographyTableText = styled(Typography)({
    variant: 'body1',
    align: 'left',
    gutterBottom: true,
    color: '#ffffff'
  });
  const StackColumn = styled(Stack)({
    direction: 'column',
    gap: 2
  });
  return (
    <Container
      mb={20}
      p={20}
      component="footer"
      maxWidth="false"
      sx={{ ml: px2vw(200), mr: px2vw(200), width: 'initial' }}>
      <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
        <StackColumn alignItems={'center'}>
          <img src="/images/logo.svg" alt="cyberia" width="200" height="auto"></img>
          <Typography variant="h6" align="center" color="white" width={200}>
            Web and machine learning developing company
          </Typography>
          <Stack direction="row" alignItems={'inherit'} gap={5}>
            <StackColumn>
              <TypographyTableText>+7 499 679 45 79</TypographyTableText>
              <TypographyTableText>hello@cyberia.ru</TypographyTableText>
              <TypographyTableText>Аносова 3Б, оф. 1</TypographyTableText>
            </StackColumn>
            <StackColumn>
              <TypographyTableText>Главная</TypographyTableText>
              <TypographyTableText>Услуги</TypographyTableText>
              <TypographyTableText>Проекты</TypographyTableText>
            </StackColumn>
            <StackColumn>
              <TypographyTableText>Блог</TypographyTableText>
              <TypographyTableText>О нас</TypographyTableText>
              <TypographyTableText>Команда</TypographyTableText>
            </StackColumn>
          </Stack>
          <Typography variant="body1" align="center" color="white">
            2022, digital-агентство Cyberia Положение о защите персональных данных Политика в
            отношении обработки и защиты персональных данных Оферта оказания услуг
          </Typography>
        </StackColumn>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'grid', md: 'block' } }}>
        <Stack direction="row" alignItems={'stretch'} gap={5}>
          <StackColumn>
            <img src="/images/logo.svg" alt="cyberia" width="200" height="auto"></img>
            <Typography variant="h6" align="left" gutterBottom color="white" width={200} mt={4}>
              Web and machine learning developing company
            </Typography>
          </StackColumn>
          <Stack direction="row" alignItems={'inherit'} sx={{ gap: { sm: 2, md: 5 } }}>
            <StackColumn>
              <TypographyTableText>+7 499 679 45 79</TypographyTableText>
              <TypographyTableText>hello@cyberia.ru</TypographyTableText>
              <TypographyTableText>Аносова 3Б, оф. 1</TypographyTableText>
            </StackColumn>
            <StackColumn>
              <TypographyTableText>Главная</TypographyTableText>
              <TypographyTableText>Услуги</TypographyTableText>
              <TypographyTableText>Проекты</TypographyTableText>
            </StackColumn>
            <StackColumn>
              <TypographyTableText>Блог</TypographyTableText>
              <TypographyTableText>О нас</TypographyTableText>
              <TypographyTableText>Команда</TypographyTableText>
            </StackColumn>
            <TypographyTableText sx={{ display: { sm: 'none', md: 'flex' } }}>
              2022, digital-агентство Cyberia Положение о защите персональных данных Политика в
              отношении обработки и защиты персональных данных Оферта оказания услуг
            </TypographyTableText>
          </Stack>
        </Stack>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          color="white"
          mt={2}
          sx={{ display: { sm: 'flex', md: 'none' } }}>
          2022, digital-агентство Cyberia Положение о защите персональных данных Политика в
          отношении обработки и защиты персональных данных Оферта оказания услуг
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
