import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';
import CheckCircle from '@mui/icons-material/CheckCircle';


export default function BasicCard() {
    const [selected, setSelected] = React.useState(true);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          RETO DIARIO
        </Typography>
        <Typography variant="h5" component="div">
          Ejemplo
        </Typography>
        <Typography variant="body2">
          Chekeo diario
        </Typography>
      </CardContent>
      <CardActions>
        <ToggleButton
        size="small"
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >Completar
      <CheckCircle />
    </ToggleButton>     
      </CardActions>
    </Card>
  );
}
