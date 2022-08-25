import React, {useState, useEffect} from "react";
import FoodItem from "components/FoodListItem/FoodItem";
import FoodService from "services/food.service";
import UserService from "services/user.service";
import AuthService from "services/auth.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


export default function CardSettings() {
    const [desayuno, setDesayuno] = useState(getDatafromDesayuno());
    const [almuerzo, setAlmuerzo] = useState(getDatafromAlmuerzo());
    const [comida, setComida] = useState(getDatafromComida());
    const [merienda, setMerienda] = useState(getDatafromMerienda());
    const [cena, setCena] = useState(getDatafromCena());

    const [submited,setSubmited]= useState(false);
    const [disabled,setDisabled]= useState(false);

    const id = AuthService.getCurrentUser().id;

    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);

    // delete book from LS
    const deleteBook = (id) => {

    }
    const deleteAll = () => {
        setAlmuerzo([]);
        setCena([]);
        setComida([]);
        setDesayuno([]);
        setMerienda([]);

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

    const generoUsuario = AuthService.getCurrentUser().gender;

    
    function ajustarKcalSegunGenero() {
        if(generoUsuario=="masculino"){
          
          return {min: 2000,max:2500}
        }
    
        if(generoUsuario=="femenino"){
          
          return {min: 1600,max:2000}
        }
      }

    const [ideal,setIdeal]= useState(ajustarKcalSegunGenero());

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
    
        return Math.trunc(KcaloriaT*0.238846);
    }

    const kcalTotales = getTodasCalorias()

    const handleInsertDiaryFood = (e) => {
        e.preventDefault();

        let comidas = {
            desayuno : desayuno,
            almuerzo : almuerzo,
            comida : comida,
            merienda : merienda,
            cena : cena
        }
        if(window.confirm("Ya has registrado todas tus comidas? Solo se podrá registrar una vez por día.") == true){
        FoodService.insertarComidaDiariaPorId(AuthService.getCurrentUser().id,comidas).then(
            response => {
              setMessage(response.data);
              setSuccessful(true);
              UserService.sumarPuntuacionAUsuarioPorElemento(id,"nutricion");
                
              if(kcalTotales> ideal.min && kcalTotales<ideal.max){
              toast.success("Has ganado 25 puntos!",{
                icon: ({theme, type}) =>  <img src={require("iconos/puntuacion.png").default}/> 
              });
                }
                if(kcalTotales< ideal.min || kcalTotales>ideal.max){
                    toast.error("No has cumplido con tu rango ideal...",{
                        icon: ({theme, type}) =>  <img src={require("iconos/triste.png").default}/> 
                      });
                }
            },
            error => {
              setMessage(error.response.data);
              setSuccessful(false);
            }
          )}
        
      }

    return (
        <>
        <ToastContainer /> 
        < div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" > <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Mis comidas
                </h6>
                <button
                    className="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => deleteAll()}>
                    Eliminar
                </button>
            </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Desayuno
                </h6>
                <div>
                    {
                        desayuno.map(
                            (comida) => (<FoodItem comida={comida} deleteBook={() => deleteBook}/>)
                        )
                    }
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Almuerzo
                </h6>
                <div>{
                        almuerzo.map(
                            (comida) => (<FoodItem comida={comida} deleteBook={() => deleteBook}/>)
                        )
                    }</div>

                <hr className="mt-6 border-b-1 border-blueGray-300"/>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Comida
                </h6>
                <div>{
                        comida.map(
                            (comida) => (<FoodItem comida={comida} deleteBook={() => deleteBook}/>)
                        )
                    }</div>

                <hr className="mt-6 border-b-1 border-blueGray-300"/>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Merienda
                </h6>
                <div>{
                        merienda.map(
                            (comida) => (<FoodItem comida={comida} deleteBook={() => deleteBook}/>)
                        )
                    }</div>
                <hr className="mt-6 border-b-1 border-blueGray-300"/>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Cena
                </h6>
                <div>
                    {
                        cena.map(
                            (comida) => (<FoodItem comida={comida} deleteBook={() => deleteBook}/>)
                        )
                    }
                </div>

                <div class="mt-6 flex items-center justify-between">
                    <button disabled={disabled}
                    onClick={handleInsertDiaryFood}
                        class="bg-emerald-500 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                        <span>Enviar</span>
                    </button>
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
            </form>
        </div>
    </div>
</>
    );
}
