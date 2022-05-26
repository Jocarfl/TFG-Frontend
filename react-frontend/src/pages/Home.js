import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import TopMenuBoo from "../components/TopMenuBoo";
import RetosDiarios from "../components/RetosDiarios";
import { Container } from '@mui/material';
import { LinkContainer } from 'react-router-bootstrap';
import { Nutricion } from './Nutricion';

export function Home() {

  return (
    <StyledEngineProvider injectFirst>
    <TopMenuBoo />
    <Container fixed sx={ 'flex-grow: 5' }>
    <RetosDiarios />
    </Container>
    <Container sx={'flex-grow: 2'}>
    </Container>
  </StyledEngineProvider>
  );
}
