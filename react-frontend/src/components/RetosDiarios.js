import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardRetoDiario from './CardRetoDiario';

export default function RetosDiarios() {
  return (
    
    <Box sx={{ width: '100%' , pt:'8px' }}>
      <Grid container flex={1} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <CardRetoDiario></CardRetoDiario>
        </Grid>
        <Grid item xs={4}>
        <CardRetoDiario></CardRetoDiario>
        </Grid>
        <Grid item xs={4}>
        <CardRetoDiario></CardRetoDiario>
        </Grid>
      </Grid>
    </Box>
  );
}