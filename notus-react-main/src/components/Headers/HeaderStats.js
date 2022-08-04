import React,{Component,useEffect,useState} from "react";
import { useLocation } from 'react-router-dom';
import { ResponsiveFontSize } from 'react-responsive-font-size'
import UserService from "services/user.service";
import AuthService from "services/auth.service";
// components

import CardRetosDiarios from "components/Cards/CardRetosDiarios";
import CardInfoComida from "components/Cards/CardInfoComida";

export default function HeaderStats() {
  
  
    const [retos, setRetos] = useState([]);
    const userID = AuthService.getCurrentUser().id;


   useEffect(()=>{ UserService.getRetosDiariosSegunNivel(userID).then(data => {
      setRetos(data);
      console.log(data);
  }).catch(err => console.log(err))},[]);

    const styleObj = {
      fontSize: 14,
      color: "#4a54f1",
      textAlign: "center",
      paddingTop: "100px",
  }

  return (
    
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        {window.location.href.indexOf("/user/dashboard")  !== -1 &&
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap justify-center">
              
            {
              
                retos.map((item)=>(
                  
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardRetosDiarios
                  statSubtitle={"Reto Nivel: "+item.level}
                  statTitle={item.title}
                  statDescripiron={item.description}
                /></div>

                ))
            }
              
            </div>
          </div>
        </div>}

        {window.location.href.indexOf("/user/nutricion") !== -1 &&
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-4/12 xl:w-6/12 px-4">
                  <CardInfoComida/>
              </div>
          </div>
        </div>}

        {window.location.href.indexOf("/user/recomendaciones") !== -1 &&
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap justify-center">

            
              
          <div style={{ height: "100px" }}>
      <ResponsiveFontSize className="text-blueGray-700 font-bold" ratio={0.4} optionsObject={{ setFontSize: true, globalVariableName: '--my-variable', lockFontSize: false }}>
        RECOMENDACIONES <i className="fas fa-book-medical"></i>
      </ResponsiveFontSize>
    </div>
              
          </div>
        </div>}
        
      </div>
    </>
  );
  }

