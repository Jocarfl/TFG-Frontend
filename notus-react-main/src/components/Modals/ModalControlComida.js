import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"
import Select from 'react-select';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const getDatafromDesayuno=()=>{
  const data = localStorage.getItem('desayuno');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const getDatafromAlmuerzo=()=>{
  const data = localStorage.getItem('almuerzo');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
const getDatafromComida=()=>{
  const data = localStorage.getItem('comida');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
const getDatafromMerienda=()=>{
  const data = localStorage.getItem('merienda');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
const getDatafromCena=()=>{
  const data = localStorage.getItem('cena');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export default function ModalControlComida ({setFood}) {

  const [desayuno, setDesayuno]=useState(getDatafromDesayuno());
  const [almuerzo, setAlmuerzo]=useState(getDatafromAlmuerzo());
  const [comida, setComida]=useState(getDatafromComida());
  const [merienda, setMerienda]=useState(getDatafromMerienda());

  const [cena, setCena]=useState(getDatafromCena());
  const [cantidad, setCantidad]= useState();
  const [comidaDelDia, SetComidaDelDia] = useState({label: "Desayuno", value: "desayuno"});


  const onChangeCantidad = (e)=>{
    e.preventDefault();
    setCantidad(e.target.value);
  }

  const onChangeComidaDelDia = (e)=>{
    SetComidaDelDia({label:e.label,value:e.value});
  }

  const onSubmit = (e) => {

    setFood.energiaT = cantidad/100*setFood.energiaT;
    setFood.proteinaT = cantidad/100*setFood.proteinaT;
    setFood.caloriasT = setFood.energiaT*0.238846;
    setFood.grasaT = cantidad/100*setFood.grasaT;
    setFood.cantidad = cantidad;

    if(comidaDelDia.value === "desayuno"){
      setDesayuno([...desayuno,setFood]);
      window.location.reload();
    }
    if(comidaDelDia.value === "almuerzo"){
      setAlmuerzo([...almuerzo,setFood]);
      window.location.reload();
    }
    if(comidaDelDia.value === "comida"){
      setComida([...comida,setFood]);
      window.location.reload();
    }
    if(comidaDelDia.value === "merienda"){
      setMerienda([...merienda,setFood]);
      window.location.reload();
    }
    if(comidaDelDia.value === "cena"){
      setCena([...cena,setFood]);
      window.location.reload();
    }

  }

     useEffect(()=>{
      localStorage.setItem('desayuno',JSON.stringify(desayuno));
    },[desayuno])
     // saving data to local storage
     useEffect(()=>{
      localStorage.setItem('almuerzo',JSON.stringify(almuerzo));
    },[almuerzo])
     // saving data to local storage
     useEffect(()=>{
      localStorage.setItem('comida',JSON.stringify(comida));
    },[comida])
     // saving data to local storage
     useEffect(()=>{
      localStorage.setItem('merienda',JSON.stringify(merienda));
    },[merienda])
    // saving data to local storage
    useEffect(()=>{
      localStorage.setItem('cena',JSON.stringify(cena));
    },[cena])

  const form = useRef(null);



  const options = [
    { label: "Desayuno", value: "desayuno" },
    { label: "Almuerzo", value: "almuerzo" },
    { label: "Comida", value: "comida" },
    { label: "Merienda", value: "merienda" },
    { label: "Cena", value: "cena" }
  ];

return (
    <Popup
    trigger={<button className="button">
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg">
                    <i className="fas fa-plus"></i>
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
          <h6 className="text-blueGray-700 text-xl font-bold">{setFood.nombre}</h6>
        </div>
        <div className="content">
        <Form
        ref={form}
        onSubmit={onSubmit}>
        <div class="mb-4 pt-6">
          
          <label class="block text-gray-700 text-xl font-bold mb-2 mr-4" >Cantidad (g)</label>
          <Input
              type="number"
              name="cantidad"
              min="0"
              required
              onChange={onChangeCantidad}
              placeholder="Cantidad en gramos"
              class="shadow appearance-none  rounded w-full py-2 px-6 textblueGray-900 focus:outline-none focus:shadow-outline"/> 
                      
        </div>

        <div class="mb-6">
          
          <label class="block text-gray-700 text-xl font-bold mb-2 mr-4" >Comida del dia</label>
          <Select options={ options } defaultValue={{label: "Desayuno", value: "desayuno"}} value={comidaDelDia} onChange={value =>onChangeComidaDelDia(value)}  />        
        </div>

        <div class="flex justify-center mt-4 pl-4">             
              <button
            className="bg-red-500 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            cerrar
          </button>
          <button
          type="submit"
                class="bg-emerald-500 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                <span>Insertar</span>
              </button>
            </div>
        </Form>
        </div>
      </div>
    )}
  </Popup>
);}
