import React from "react";
import Popup from "reactjs-popup";
import DataTable from "react-data-table-component";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"

const columns = [
    {
      name: 'Nombre',
        selector : row => row.first_name,
        sortable: true,
    },
    {
      name: 'Apellido',
      selector : row => row.second_name,
      sortable: true,

    },
    {
        name: 'DNI',
        selector : row => row.dni,
        sortable: true,
      },
  ];

  const customStyles = {
    headRow: {
      style: {
        border: 'none',
      },
      },
      headCells: {
        style: {
          color: '#202124',
          fontSize: '14px',
        },
      },
      rows: {
        highlightOnHoverStyle: {
          backgroundColor: 'rgb(230, 244, 244)',
          borderBottomColor: '#FFFFFF',
          borderRadius: '25px',
          outline: '1px solid #FFFFFF',
        },
      },
      pagination: {
        style: {
          border: 'none',
        },
      },
    };

export default function ModalListaPacientesVinculados ({setOpen,open,datos,listaPacientes}) {

    return(
      <Popup open={open} modal
      onClose={() =>setOpen(false)}>
        {() => ( 
          <>
          <div className="modal">
        <button className="close" onClick={()=> setOpen(false)}>
          &times;
        </button>
        <div className="header">
          <h6 className="text-blueGray-700 text-xl font-bold">Pacientes vinculados a {datos.first_name}</h6>
        </div>
        <div className="content">
        <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
        <div className="w-full px-4 flex-1">
        <DataTable
			columns={columns}
            dense
            data={listaPacientes}
			subHeader
            responsive
            customStyles={customStyles}
            expandableCloseAllOnExpand
			persistTableHead
		/> 
        </div>
              
            
            </div>
        </div>

        <div className="flex flex-wrap mt-6">
        
  </div>
       

        </div>
      </div>
          </>
        )}
      </Popup>
    )
  
}
