import Pagination from 'components/Pagination/Pagination';
import React, { useState, useMemo } from 'react';
import CardTablaListaPacientes from "components/Cards/CardTablaListaPacientes"



export default function Pacientes() {
  

  return (
    <>
      <div>
        <div className="flex flex-wrap mt-6 ">      
          <div >
            <CardTablaListaPacientes></CardTablaListaPacientes>
          </div>
        </div>
        </div>
    </>
  );
}