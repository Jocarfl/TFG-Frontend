import React,{Component} from "react";
import { useLocation } from 'react-router-dom';
import { ResponsiveFontSize } from 'react-responsive-font-size'
// components

import CardRetosDiarios from "components/Cards/CardRetosDiarios";
import CardInfoComida from "components/Cards/CardInfoComida";

export default class HeaderStats extends Component {
  

  constructor(props) {
    super(props);
    
  }
  
  render(){   

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
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardRetosDiarios
                  statSubtitle="Reto 1"
                  statTitle="Título reto"
                  statDescripiron="Descripción reto"
                  statIconName="fa fa-check"
                  statIconColor="bg-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardRetosDiarios
                  statSubtitle="Reto 2"
                  statTitle="Título reto"
                  statDescripiron="Descripción reto"
                  statIconName="fa fa-check"
                  statIconColor="bg-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardRetosDiarios
                  statSubtitle="Reto 3"
                  statTitle="Título reto"
                  statDescripiron="Descripción reto"
                  statIconName="fa fa-check"
                  statIconColor="bg-emerald-500"
                />
              </div>
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
}
