import Table from 'react-bootstrap/Table';
import Pagination from '../components/Pagination';
import React, { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

let PageSize = 10;

export default function TabaComida({data}) {

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
        <Table responsive="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Energía(KJ)</th>
            <th>Grasa(G)</th>
            <th>Proteína(G)</th>
          </tr>
        </thead>
        <tbody>
        {currentTableData.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.energiaT}</td>
            <td>{item.grasaT}</td>
            <td>{item.proteinaT}</td>
          </tr>
        ))}
        </tbody>  
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />    
      </Table>
      
      </>
    );
  }
  