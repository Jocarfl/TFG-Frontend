import Table from 'react-bootstrap/Table';
import Pagination from '../components/Pagination';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TablonActividad() {

    return (
        <Table striped="striped" bordered="bordered" hover="hover">
            <thead>
                <tr>
                    <th>Actividad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Emilio ha conseguido llegar a nivel 10!</td>
                </tr>
                <tr>
                    <td>Has llegado a nivel 20!</td>
                </tr>
                <tr>
                    <td>Has conseguido tu primer logro!</td>
                </tr>
            </tbody>
        </Table>
    );
}
