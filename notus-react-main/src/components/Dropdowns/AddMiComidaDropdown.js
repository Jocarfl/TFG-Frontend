import React ,{ useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from "@popperjs/core";
import ModalGramosComida from "components/Modals/ModalGramosComida"

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

  const [showModal, setShowModal] = useState(false);

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
        onClick={() => setShowModal(true)}
      >
        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg">
        <i className="fas fa-plus"></i>
</span>
        
      </a>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default NotificationDropdown;
