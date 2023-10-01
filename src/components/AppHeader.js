import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import px2vw from '../utils/px2vw';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer } from '@mui/material';

const pages = ['О нас', 'Услуги', 'Проекты', 'Блог', 'Контакты'];

function AppHeader() {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: '#2B2D3A',
        color: '#ffffff'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(anchor, false)}
        color="inherit">
        <CloseIcon />
      </IconButton>
      {pages.map((page) => (
        <MenuItem key={page}>
          <Typography
            textAlign="center"
            gutterBottom
            sx={{ textTransform: 'none', fontSize: '15px' }}>
            {page}
          </Typography>
        </MenuItem>
      ))}
    </Box>
  );

  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ ml: px2vw(200), mr: px2vw(50) }}>
          <img src="/images/logo.svg" alt="cyberia" width="100" height="auto"></img>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              gap: { xs: 'none', md: px2vw(50) },
              justifyContent: { xs: 'right', md: 'center' }
            }}>
            {['top'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(anchor, true)}
                  color="inherit">
                  <MenuIcon />
                </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Menu
              id="menu-appbar"
              open={false}
              sx={{
                display: { xs: 'flex', md: 'none' }
              }}></Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: { xs: 'none', md: px2vw(100) },
              justifyContent: { xs: 'right', md: 'center' }
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: '#ffffff',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '15px'
                }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;
