import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {StyledEngineProvider} from '@mui/material/styles';
import RetosDiarios from "../components/RetosDiarios";
import {LinkContainer} from 'react-router-bootstrap';
import {Nutricion} from './Nutricion';
import GraficaPeso from '../components/GraficaPeso';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import CardPerfilHome from '../components/CardPerfilHome';
import TablaClasificacion from '../components/TablaClasificacion';
import TablonActividad from '../components/TablonActividad';
import './css/Home.css'


export function Home() {

    return (
        <Container className='container'>
            <Row style={{paddingTop:4}}>
                <Col xs={6} md={10}>
                    <div class="mx-auto">
                        <div class="d-grid gap-3">
                        <div >
                                <RetosDiarios/>
                                
                            </div>
                            <div class="p-3 bg-light border"><GraficaPeso/></div>
                            
                            <div>
                                <TablonActividad></TablonActividad>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={{ span: 1, offset: 1 }}>
                    <CardPerfilHome></CardPerfilHome>
                    <Container>
                    <TablaClasificacion className='clasificacion'></TablaClasificacion>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
