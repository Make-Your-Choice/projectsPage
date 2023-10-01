import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('Перенаправление на главную страницу');
}

export default function BasicBreadcrumbs(prop) {
  let { currentPage } = prop;
  return (
    <Box role="presentation" onClick={handleClick} alignItems={'baseline'} mb={10}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" href="/" variant="body1" color="white">
          Главная
        </Link>
        <Typography variant="body1" color="white">
          {currentPage}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
