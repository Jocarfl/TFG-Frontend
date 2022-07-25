import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"
import ModService from "services/mod.service";
import DataTable from "react-data-table-component"
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";


const columns = [
    {
      name: 'Fecha',
        selector : row => row.date,
        sortable: true,
    },
    {
      name: 'Peso (kg)',
      selector : row => row.weight,
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

export default function ModalRegistroPesos ({setMod}) {

    
    const [registro, setRegistro] = useState([]);
    const [state, setState] = useState(false);

  useEffect(()=>{ModService.getHistorialPesoPaciente(setMod._id).then(data => {
    setRegistro(data);
}).catch(err => console.log(err));},[state])


  

  const setStateTrue = (e)=>{
    e.preventDefault();
    setState(true);
  }



  const form = useRef(null);


return (
    <Popup
    trigger={<button className="button" onClick={setStateTrue}>
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg">
                    <i className="fas fa-weight-hanging"></i>
                </span>
            </button>}
            
    modal="modal"
    nested="nested">
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">
          <h6 className="text-blueGray-700 text-xl font-bold">Registro Peso de {setMod.username}</h6>
        </div>
        <div className="content">
        <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
        <div className="w-full px-4 flex-1">
        <DataTable
			columns={columns}
            dense
            data={registro}
			subHeader
      fixedHeader
  fixedHeaderScrollHeight="300px"
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
    )}
  </Popup>
);}
