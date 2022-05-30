import Table from 'react-bootstrap/Table';
import Pagination from '../components/Pagination';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TablonActividad() {

    return (
        <Table striped="striped" bordered="bordered" hover="hover">
            <thead>
                <tr>
                    <th>PUESTO</th>
                    <th>JUGADOR</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Emilio</td>
                    <td>200p</td>
                </tr>
                <tr>
                <td>2</td>
                    <td>Ana</td>
                    <td>150p</td>
                </tr>
                <tr>
                <td>3</td>
                    <td>Juan</td>
                    <td>100p</td>
                </tr>
            </tbody>
        </Table>
    );
}
