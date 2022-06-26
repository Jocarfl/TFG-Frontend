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

    return KcaloriaT;
}
    

    return (
        <>
         < div className = "relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-xl rounded-lg " >
             <div className="px-6">

            <div className="text-center justify-center mb-12 mt-5">
              Kcal Ideal : 2000-2500
            </div>
            <div className="text-center mt-5 mb-2">
                      <ProgressBar
                completed={getTodasCalorias()}
                bgColor="#1eea0a"
                height=""
                width=""
                labelAlignment="center"
                labelColor="#000000"
                labelSize="15px"
                maxCompleted={2250}
                customLabel={getTodasCalorias()+" kcal"}/>

            </div>
        </div>
    </div>
</>
    );
}

export default CardInfoComida;