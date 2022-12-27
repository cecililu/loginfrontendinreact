import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
export const PageNotFound = () => {
const primary = purple[500]; 
    return (
        <CssBaseline>
         <Box   
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: primary,
          }}
        >
          <Typography variant="h1" style={{ color: 'white' }}>
            404
          </Typography>
          <Typography variant="h5" style={{ color: 'white', m:30 }}>
            Page not Found
          </Typography>
        </Box>
        </CssBaseline>
        
      );
  
}
