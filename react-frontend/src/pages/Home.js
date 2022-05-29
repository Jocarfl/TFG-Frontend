import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {StyledEngineProvider} from '@mui/material/styles';
import RetosDiarios from "../components/RetosDiarios";
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap';
import {Nutricion} from './Nutricion';
import GraficaPeso from '../components/GraficaPeso';

export function Home() {

    return (
        <Container className="justify-content-md-center">
          <div class="mx-auto" >
            <div class="d-grid gap-3">
                <div >
                    <RetosDiarios/>
                </div>
                <div class="p-3 bg-light border">
                    <GraficaPeso />
                </div>
            </div>
          </div>
        </Container>
    );
}
