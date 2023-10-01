import Grid from '@mui/material/Grid';
import px2vw from '../utils/px2vw';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import * as React from 'react';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#fff',
            '--TextField-brandBorderHoverColor': '#fff',
            '--TextField-brandBorderFocusedColor': '#fff',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)'
            },
            '& .MuiInputBase-root': {
              color: '#fff'
            },
            '& .MuiFormLabel-root': {
              color: '#fff'
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: '#fff'
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)'
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)'
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)'
            }
          }
        }
      }
    }
  });

function AppForm() {
  const outerTheme = useTheme();
  const [fileName, setFileName] = React.useState('');
  const [fileVar, setFileVar] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const checkFile = (event) => {
    if (event.target.files[0] != null) {
      const file = event.target.files[0];
      console.log(file);
      setFileVar(true);
      setFileName(file.name);
    }
  };
  function resetFile() {
    setFileVar(false);
    setFileName('');
  }
  const onSubmit = async (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    axios
      .post('https://backend.cyberia.studio/api/v1/feedbacks', data)
      .then((response) => console.log(response))
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error('Произошла ошибка', error);
      });
  };
  return (
    <Box
      sx={{
        py: 20,
        mb: 10,
        backgroundColor: '#252631'
      }}>
      <Grid
        container
        spacing={4}
        maxWidth="false"
        sx={{ ml: px2vw(200), mr: px2vw(200), width: 'inherit' }}>
        <Grid item xs={12} sm={12} md={6}>
          <Stack direction={'column'} gap={5}>
            <img src="/images/logo_form.svg" alt="items logo" width="75" height="auto"></img>
            <Typography
              variant="h3"
              align="left"
              color="white"
              sx={{ display: 'flex', maxWidth: px2vw(400), fontWeight: 'bold' }}>
              Расскажите о вашем проекте
            </Typography>
            <Typography
              variant="body1"
              align="left"
              gutterBottom
              color="white"
              display={'flex'}
              flexWrap={'wrap'}>
              Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или
              выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее
              будет дальнейшее обсуждение.
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <form method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={'column'} gap={5}>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  {...register('email', { required: true })}
                />
                <TextField
                  label="Телефон"
                  variant="outlined"
                  type="tel"
                  {...register('phone', { required: true })}
                />
                <TextField
                  label="Сообщение"
                  multiline
                  rows="4"
                  type="text"
                  autoComplete="false"
                  {...register('message', { required: true })}
                />
                <label htmlFor="file" onChange={checkFile}>
                  <input id="file" hidden name="file" type="file" {...register('file')} />
                  {fileVar ? (
                    <Typography variant="body1" color="white" display={'flex'} flexWrap={'wrap'}>
                      {fileName}
                      <Fab color="primary" size="small" component="span" onClick={resetFile}>
                        <ClearIcon />
                      </Fab>
                    </Typography>
                  ) : (
                    <Fab color="primary" size="small" component="span">
                      <AddIcon />
                    </Fab>
                  )}
                </label>
              </ThemeProvider>
              <Stack direction={'row'} gap={5} alignItems={'baseline'}>
                <Button variant="contained" type="submit" fullWidth>
                  Связаться с нами
                </Button>
                <Typography variant="body1" color="white" display={'flex'} flexWrap={'wrap'}>
                  Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
                </Typography>
              </Stack>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppForm;
