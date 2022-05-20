import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardRetoDiario from './CardRetoDiario';
import Container from '@mui/material/Container';
import { padding } from '@mui/system';


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