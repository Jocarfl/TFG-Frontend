import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"


export default function ModalInfoPaciente ({setOpen,open,datos}) {

  const [edad, setEdad] = useState("");

    function getAge(){
      const partsDateUser = datos.born_date.split('/');
      const d1 = new Date( partsDateUser[2], partsDateUser[1]-1, partsDateUser[0] );
      const d2 = new Date();
      var diff = d2.getTime() - d1.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));}

  useEffect(()=>{ if (open){ setEdad(getAge());} },[open])

  
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
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">GÉNERO</span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">PESO: {datos.weight} </span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-600 rounded border border-solid border-blueGray-200 font-bold">ALTURA: {datos.height}</span>
    </div>
  </div>
</div>

<hr className="my-4 md:min-w-full" />

       

        </div>
      </div>
          </>
        )}
      </Popup>
    )
  
}
