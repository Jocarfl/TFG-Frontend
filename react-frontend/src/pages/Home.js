import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import TopMenu from "../components/TopMenu";
import RetosDiarios from "../components/RetosDiarios";
import { Container } from '@mui/material';

export function Home() {

  return (
    <StyledEngineProvider injectFirst>
    <TopMenu />
    <Container fixed sx={ 'flex-grow: 5' }>
    <RetosDiarios />
    </Container>
    <Container sx={'flex-grow: 2'}>
    </Container>
  </StyledEngineProvider>
  );
}
