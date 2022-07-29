import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"
import ModService from "services/mod.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import TextArea from "react-validation/build/textarea";


export default function ModalInsertarRecomendacion ({setMod}) {

    const [_title, setTitle] = useState('');
    const [_description, setDescription] = useState('');

    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();

    ModService.insertarRecomendacionPaciente(setMod._id,_title,_description).then(
        response => {
          setMessage(response.message);
          setSuccessful(true);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response &&
              error.response.message) ||
            error.message ||
            error.toString();
        
            console.log(resMessage);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
        

  }

  const onChangeTitle = (e)=>{
    e.preventDefault();
    setTitle(e.target.value);
  }

  const onChangeDescription = (e)=>{
    e.preventDefault();
    setDescription(e.target.value);
  }

  


  const form = useRef(null);



return (
    <Popup
    trigger={<button className="button">
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg">
                    <i className="fas fa-heart"></i>
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
          <h6 className="text-blueGray-700 text-xl font-bold">{"Insertar recomendación a  "+setMod.username}</h6>
        </div>
        <div className="content">
        <Form
        ref={form}
        onSubmit={onSubmit}>
        <div class="mb-6 pt-6">
          
          <label class="block text-gray-700 text-xl font-bold mb-2 mr-4" >Título</label>
          <Input
              type="text"
              name="titulo"
              min="0"
              required
              onChange={onChangeTitle}
              placeholder="Título"
              class="shadow appearance-none  rounded w-full py-2 px-6 textblueGray-900 focus:outline-none focus:shadow-outline"/> 
    
        </div>
        <div class="mb-6 pt-4">
          
          <label class="block text-gray-700 text-xl font-bold mb-2 mr-4" >Descripción</label>
          <TextArea
              type="number"
              name="cantidad"
              min="0"
              required
              onChange={onChangeDescription}
              placeholder="Descripción de la recomendación"
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
