import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AdminService from "services/admin.service";


export default function ModalControlComida ({setMod}) {

  const [dni, setDNI] = useState('');
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const onChangeDNI = (e)=>{
    e.preventDefault();
    setDNI(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    AdminService.vincularUsuarioConMod(
      dni,
      setMod._id).then(
        response => {
          setMessage(response.data);
          setSuccessful(true);
        },
        error => {
          setMessage(error.response.data);
          setSuccessful(false);
        }
      )
  }


  const form = useRef(null);


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
          <h6 className="text-blueGray-700 text-xl font-bold">Vincular Paciente a {setMod.username}</h6>
        </div>
        <div className="content">
        <Form
        ref={form}
        onSubmit={onSubmit}>
        <div class="mb-12 m-2 pt-6">
          
          <label class="block text-gray-700 text-xl font-bold mb-2 mr-4" >DNI Paciente</label>
          <Input
              type="text"
              name="dni"
              min="0"
              required
              onChange={onChangeDNI}
              placeholder="DNI"
              class="shadow appearance-none  rounded w-full py-2 px-6 textblueGray-900 focus:outline-none focus:shadow-outline"/> 

                     {message && (
              <div >
                <div
                  className={
                    successful
                      ? "text-emerald-500 text-xs italic"
                      : "text-red-500 text-xs italic"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}  
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
