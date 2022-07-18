import Pagination from 'components/Pagination/Pagination';
import React, { useState, useMemo } from 'react';
import CardTablaListaPacientesRegistroComida from "components/Cards/CardTablaListaPacientesRegistroComida"



export default function HistorialComida() {
  

  return (
    <>
      <div>
        <div className="flex flex-wrap mt-6 ">      
          <div >
            <CardTablaListaPacientesRegistroComida></CardTablaListaPacientesRegistroComida>
          </div>
        </div>
        </div>
    </>
  );
}