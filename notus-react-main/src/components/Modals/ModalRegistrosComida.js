import React, {useRef,useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"
import "./css/Modal.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import ModService from "services/mod.service";
import ReactDatePicker from "react-datepicker";
import DataTable, { defaultThemes } from "react-data-table-component"


const columns = [
  {
    name: 'Nombre',
    selector : 'nombre',
    sortable: true,
  },
  {
    name: 'Cantidad(g)',
    selector : row => Math.trunc(row.energiaT),
    sortable: true,
  },
  {
    name: 'Calorías(Kcal)',
    selector : row => Math.trunc(row.energiaT*0.238846),
    sortable: true,
  },
];

const customStyles = {
  header: {
  		style: {
  			minHeight: '56px',
  		},
  	},
  	headRow: {
  		style: {
  			borderTopStyle: 'solid',
  			borderTopWidth: '1px',
  			borderTopColor: defaultThemes.default.divider.default,
  		},
  	},
  	headCells: {
  		style: {
  			'&:not(:last-of-type)': {
  				borderRightStyle: 'solid',
  				borderRightWidth: '1px',
  				borderRightColor: defaultThemes.default.divider.default,
  			},
  		},
  	},
  	cells: {
  		style: {
  			'&:not(:last-of-type)': {
  				borderRightStyle: 'solid',
  				borderRightWidth: '1px',
  				borderRightColor: defaultThemes.default.divider.default,
  			},
  		},
  	},
  };


export default function ModalRegistroComida ({setMod}) {

  const [dni, setDNI] = useState('');
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const [desayuno, setDesayuno] = useState([]);
  const [almuerzo, setAlmuerzo] = useState([]);
  const [comida, setComida] = useState([]);
  const [merienda, setMerienda] = useState([]);
  const [cena, setCena] = useState([]);

  useEffect(()=>{ModService.getRegistroComidaDePacientePorFecha(setMod._id,startDate).then(data => {

    if(data !=[]){
    setDesayuno(data.comidas.desayuno);
    setAlmuerzo(data.comidas.almuerzo);
    setComida(data.comidas.comida);
    setMerienda(data.comidas.merienda);
    setCena(data.comidas.cena);
    }else{

    setDesayuno([]);
    setAlmuerzo([]);
    setComida([]);
    setMerienda([]);
    setCena([]);

    }
     

}).catch(err => console.log(err));},[startDate])



  const form = useRef(null);


return (
    <Popup
    trigger={<button className="button">
                <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg">
                    <i className="fas fa-utensils"></i>
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
          <h6 className="text-blueGray-700 text-xl font-bold">Registro Comidas de {setMod.username}</h6>
        </div>
        <div className="content">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
     
        <label class="block text-gray-700 text-xl font-bold mb-2 mr-4" >Date</label>
          <ReactDatePicker
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        />               
        </div>

        <div className="flex flex-wrap mt-6">
        
 
        <label class="block text-gray-700 text-m font-bold mb-2 mr-4" >DESAYUNO</label>
          <DataTable 
          dense
          data={desayuno}
            columns={columns}
            customStyles={customStyles}
            persistTableHead
          />
         
        <label class="block text-gray-700 text-m font-bold mb-2 mr-4" >ALMUERZO</label>
          <DataTable
        
              dense
              data={almuerzo}
              columns={columns}
                customStyles={customStyles}
                persistTableHead/> 


        <label class="block text-gray-700 text-m font-bold mb-2 mr-4" >COMIDA</label>
          <DataTable
     
              dense
              data={comida}
              columns={columns}
                customStyles={customStyles}
                persistTableHead
              />
          <label class="block text-gray-700 text-m font-bold mb-2 mr-4" >MERIENDA</label>
          <DataTable
            dense
            data={merienda}
              columns={columns}
              customStyles={customStyles}
              persistTableHead
            />
            <label class="block text-gray-700 text-m font-bold mb-2 mr-4" >CENA</label>
    <DataTable
    dense
    data={cena}
			columns={columns}
      customStyles={customStyles}
			persistTableHead
		/>

  </div>
       

        </div>
      </div>
    )}
  </Popup>
);}
