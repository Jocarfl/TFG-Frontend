import React from "react";
import { useEffect, useState } from "react";
import {Comida} from "BaseDatosComida/ComidaBD";
import CardTablaNutricion from "components/Cards/CardTablaNutricionNEW";
import CardComidaDelDia from "components/Cards/CardComidaDelDia";
import CardMisComidas from "components/Cards/CardMisComidas";
import ModalComida from "components/Modals/ModalGramosComida";

export default function Tables() {

  return (
    <>
      <div>
        <div className="flex flex-wrap ">      
          <div className="w-full lg:w-4/12 px-4">
            <CardMisComidas></CardMisComidas>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <CardTablaNutricion data={Comida}></CardTablaNutricion>           
          </div>
        </div>
        </div>
    </>
  );
}
