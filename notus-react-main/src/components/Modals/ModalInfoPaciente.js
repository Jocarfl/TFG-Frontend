import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"


export default function ModalInfoPaciente ({setOpen,open,datos}) {

    return(
      <Popup open={open} modal
      onClose={() =>setOpen(false)}>
        {() => ( 
          <>
          <label>{}</label>
            <button onClick={() => setOpen(false)}>
              close
            </button>
          </>
        )}
      </Popup>
    )
  
}
