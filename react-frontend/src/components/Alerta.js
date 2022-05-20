import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function Alerta({ message }) {
    return (
      
      <Alert severity="info">{message}</Alert>
      
    );
  }
  