import React from "react";
import { useEffect, useState } from "react";
import {Comida} from "BaseDatosComida/ComidaBD";
import CardTablaNutricionNEW from "components/Cards/CardTablaNutricionNEW";


export default function Tables() {

  return (
    <>
      <div>
        <div className="flex flex-wrap ">      
          <div className="w-full lg:w-12/12 px-4">
            <CardTablaNutricionNEW data={Comida}></CardTablaNutricionNEW>           
          </div>
        </div>
        </div>
    </>
  );
}
