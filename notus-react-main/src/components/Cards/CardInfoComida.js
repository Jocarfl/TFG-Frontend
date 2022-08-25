import React, {useState, useEffect} from "react";
import AuthService from "services/auth.service";
import { createPopper } from "@popperjs/core"
import ProgressBar from "@ramonak/react-progress-bar";


const getDatafromDesayuno = () => {
  const data = localStorage.getItem('desayuno');
  if (data) {
      return JSON.parse(data);
  } else {
      return []
  }
}

const getDatafromAlmuerzo = () => {
  const data = localStorage.getItem('almuerzo');
  if (data) {
      return JSON.parse(data);
  } else {
      return []
  }
}
const getDatafromComida = () => {
  const data = localStorage.getItem('comida');
  if (data) {
      return JSON.parse(data);
  } else {
      return []
  }
}
const getDatafromMerienda = () => {
  const data = localStorage.getItem('merienda');
  if (data) {
      return JSON.parse(data);
  } else {
      return []
  }
}
const getDatafromCena = () => {
  const data = localStorage.getItem('cena');
  if (data) {
      return JSON.parse(data);
  } else {
      return []
  }
}

// components

const CardInfoComida = () => {

  const generoUsuario = AuthService.getCurrentUser().gender;

  function ajustarKcalSegunGenero() {
    if(generoUsuario=="masculino"){
      
      return {min: 2000,max:2500}
    }

    if(generoUsuario=="femenino"){
      
      return {min: 1600,max:2000}
    }
  }

  const [ideal,setIdeal]= useState(ajustarKcalSegunGenero());

  const [desayuno, setDesayuno] = useState(getDatafromDesayuno());
  const [almuerzo, setAlmuerzo] = useState(getDatafromAlmuerzo());
  const [comida, setComida] = useState(getDatafromComida());
  const [merienda, setMerienda] = useState(getDatafromMerienda());
  const [cena, setCena] = useState(getDatafromCena());
    
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();

  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top"
    });
    setPopoverShow(true);
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };

  const getTodasCalorias = () => { 
    let KcaloriaT = 0; 
    desayuno.forEach((comida)=>{
      KcaloriaT += Math.abs(comida.energiaT);
    });
    almuerzo.forEach((comida)=>{
      KcaloriaT += Math.abs(comida.energiaT);
    });
    comida.forEach((comida)=>{
      KcaloriaT += Math.abs(comida.energiaT);
    });
    merienda.forEach((comida)=>{
      KcaloriaT += Math.abs(comida.energiaT);
    });
    cena.forEach((comida)=>{
      KcaloriaT += Math.abs(comida.energiaT);
    });

    return Math.trunc(KcaloriaT*0.238846);
}

const getColorSegunKcalIdeal = () => {

  const kcal = getTodasCalorias();

  if(kcal<ideal.min){

    return "#FFC300"
  }

  if(kcal>ideal.min && kcal<ideal.max){

    return "#DAF7A6"
  }

  if(kcal>ideal.max){

    return "#FF5733"
  }

}
    return (
        <>
         < div className = "relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-xl rounded-lg " >
             <div className="px-6">

            <div className="text-center justify-center mb-6 mt-5 ">
            <h6 className="text-blueGray-700 text-xl font-bold">TUS CALORIAS IDEALES:
                </h6>
            </div>
            <div className="text-center justify-center mb-12">
            <h6 className="text-blueGray-700 text-xl font-bold">{ideal.min + " - " + ideal.max + " KCAL"}
                </h6>
            </div>
            <div className="text-center mt-5 mb-2 pb-2">
                      <ProgressBar
                completed={getTodasCalorias()}
                bgColor={getColorSegunKcalIdeal()}
                height=""
                width=""
                borderRadius="10%"
                labelAlignment="center"
                padding="px"
                margin="10px"
                labelColor="#000000"
                labelSize="15px"
                maxCompleted={ideal.min}
                customLabel={getTodasCalorias()+" kcal"}/>

            </div>
        </div>
    </div>
</>
    );
}

export default CardInfoComida;