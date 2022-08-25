import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import Avatar from "react-avatar-edit";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"

export default function ModalCambioDeAvatar ({setOpen,open,getData}) {

  const [preview, setPreview] = useState("");

  const onSelectPic = () => {
    localStorage.setItem('avatar',preview);
    getData(preview);
    setOpen(false)
  };

  const onClose = () => {
    setPreview("");
}

const onCrop = defaultPreview => {
  setPreview(defaultPreview);
}
  
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
          <h6 className="text-blueGray-700 text-xl font-bold">Cambiar Avatar</h6>
        </div>
        <div className="content">
        <div className="container px-4 mx-auto">
        
  
</div>


<div className="container px-4 mb-4 mx-auto">
        <div className="flex flex-wrap">
        <div className="w-full px-4 flex-1">
        <Avatar
        imageWidth={270}
          width={"100%"}
          height={180}
          onCrop={onCrop}
          onClose={onClose}

        />
        </div>

        <div className="w-full px-4 flex-1">
        <div className="relative w-24 h-24">

            </div>
        </div>

        <div className="w-full px-4 flex-1 pd-6">
        <div className="border-solid relative w-24 h-24">
        {preview && (
              <img
                alt="preview"
                src={preview}
                width="100%"
                height="100%"
                className="shadow-lg rounded-full max-w-full h-auto align-middle border-solid"
              />
            )}
            </div>
        </div>
        
        
            
            </div>
        </div>
        <div class="flex justify-center mt-6 pl-4">             
              <button
            className="bg-red-500 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            onClick={()=> setOpen(false)}
          >
            cerrar
          </button>
          <button

          type="submit"
              class="bg-emerald-500 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              onClick={onSelectPic}
              disabled={!preview}>
                <span>Insertar</span>
              </button>
            </div>
       

        </div>
      </div>
          </>
        )}
      </Popup>
    )
  
}
