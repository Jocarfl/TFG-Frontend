import React, {useEffect, useState } from "react";
import Popup from "reactjs-popup";
import DataTable from "react-data-table-component"
import ModService from "services/mod.service";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"


const columns = [
  {
    name: 'Título',
      selector : row => row.title,
      sortable: true,
  },
  {
    name: 'Descripción',
    selector : row => row.description,
    sortable: true,

  },
  {
    name: 'Completado',
    selector : row => {if(row.completed===true){return <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg"><i className="fas fa-check"></i></span>}else{return <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1 hover:bg-red-600 shadow-lg"><i className="fas fa-ban"></i></span>}},
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


export default function ModalInfoPaciente ({setOpen,open,datos}) {

  const [recomendaciones, setRecomendaciones] = useState([]);
  const [edad, setEdad] = useState("");

    function getAge(){
      const partsDateUser = datos.born_date.split('/');
      const d1 = new Date( partsDateUser[2], partsDateUser[1]-1, partsDateUser[0] );
      const d2 = new Date();
      var diff = d2.getTime() - d1.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));}

  useEffect(()=>{ if (open){ setEdad(getAge());} },[open])
    
  useEffect(()=>{ModService.getRecomendacionesPaciente(datos._id).then(data => {
    setRecomendaciones(data);
}).catch(err => console.log(err));},[open])
  
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
          <h6 className="text-blueGray-700 text-xl font-bold">Información de {datos.first_name}</h6>
        </div>
        <div className="content">
        <div className="container px-4 mx-auto">
  <div className="flex flex-wrap">
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">NOMBRE: {datos.first_name +" " + datos.second_name} 
      
      </span>
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">DNI:   {datos.dni}</span>
        </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">EDAD: {edad}  </span>
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">FECHA NACIMIENTO: {datos.born_date}</span>
    </div>
  </div>
  <div className="flex flex-wrap">  
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">GÉNERO: {datos.gender}</span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">PESO: {datos.weight} kg </span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">ALTURA: {datos.height} cm</span>
    </div>
  </div>
</div>

<hr className="my-4 md:min-w-full" />

<div className="container px-4 mb-4 mx-auto">
        <div className="flex flex-wrap">
        <div className="w-full px-4 flex-1">
        <DataTable
        title="Recomendaciones"
			      columns={columns}
            data={recomendaciones}
			      subHeader
            fixedHeader
            fixedHeaderScrollHeight="300px"
            responsive
            splited
            customStyles={customStyles}
            expandableCloseAllOnExpand
			      persistTableHead
		/> 
        </div>
              
            
            </div>
        </div>

       

        </div>
      </div>
          </>
        )}
      </Popup>
    )
  
}
