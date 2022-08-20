import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"

export default function ModalCambioDeAvatar ({setOpen,open,datos}) {

  const [recomendaciones, setRecomendaciones] = useState([]);
  const [state, setState] = useState(false);
  const [edad, setEdad] = useState("");

  
    return(
      <Popup open={open} modal
      onClose={() =>setOpen(false)}>
        {() => ( 
          <>
          <div className="modal">
        <button className="close" onClick={()=> setOpen(false)}>
          &times;
        </button>

        <div className="content">
        <div className="container px-4 mx-auto">
  
</div>

<hr className="my-4 md:min-w-full" />

<div className="container px-4 mb-4 mx-auto">
        <div className="flex flex-wrap">
        <div className="w-full px-4 flex-1">
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
