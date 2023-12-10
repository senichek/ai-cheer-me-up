import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
      primary: {
        main: '#db7373',
      },
      secondary: {
        main: '#E0C2FF',
        light: '#F5EBFF',
        contrastText: '#47008F',
      },
    },
  });

export default function LinearIndeterminate() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ width: '90%', margin: 'auto', color: 'primary' }}>
        <LinearProgress />
    </Box>
    </ThemeProvider>
  );
}