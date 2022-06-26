import React ,{ useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from "@popperjs/core";

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
const NotificationDropdown = ({setFood}) => {

  const [desayuno, setDesayuno]=useState(getDatafromDesayuno());
  const [almuerzo, setAlmuerzo]=useState(getDatafromAlmuerzo());
  const [comida, setComida]=useState(getDatafromComida());
  const [merienda, setMerienda]=useState(getDatafromMerienda());
  const [cena, setCena]=useState(getDatafromCena());

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const addDesayuno = (e)=>{
    e.preventDefault();
    setDesayuno([...desayuno,setFood]);
    window.location.reload();
  }

  const addAlmuerzo = (e)=>{
    e.preventDefault();
    setAlmuerzo([...almuerzo,setFood]);
    window.location.reload();
  }
  const addComida = (e)=>{
    e.preventDefault();
    setComida([...comida,setFood]);
    window.location.reload();
  }
  const addMerienda = (e)=>{
    e.preventDefault();
    setMerienda([...merienda,setFood]);
    window.location.reload();
  }
  const addCena = (e)=>{
    e.preventDefault();
    setCena([...cena,setFood]);
    window.location.reload();
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



  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg">
        <i className="fas fa-plus"></i>
</span>
        
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 hover:shadow-lg"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={addDesayuno}
        >
          Desayuno
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={addAlmuerzo}
        >
          Almuerzo
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={addComida}
        >
          Comida
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={addMerienda}
        >
          Merienda
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={addCena}
        >
          Cena
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
