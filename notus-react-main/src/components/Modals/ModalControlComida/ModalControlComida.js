import React, {useRef} from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./ModalControlComida.css"
import Select from 'react-select';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export default function ModalControlComida ({setFood}) {

  const form = useRef(null);

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log("Funciona")
  }

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
              placeholder="Cantidad en gramos"
              class="shadow appearance-none  rounded w-full py-2 px-6 textblueGray-900 focus:outline-none focus:shadow-outline"/> 
                      
        </div>

        <div class="mb-6">
          
          <label class="block text-gray-700 text-xl font-bold mb-2 mr-4" >Comida del dia</label>
          <Select  options={ options }  />        
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
