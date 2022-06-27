import React from "react";
import { useEffect, useState } from "react";
import {Comida} from "BaseDatosComida/ComidaBD";
import CardTablaNutricion from "components/Cards/CardTablaNutricion";
import CardComidaDelDia from "components/Cards/CardComidaDelDia";
import CardMisComidas from "components/Cards/CardMisComidas";

export default function Tables() {

  const [query, setQuery] = useState("");



  const Search = (data) => {
      return data.filter( (item)=> item.nombre.toLowerCase().includes(query));
  };
  
  return (
    <>
    <div>
      <div className="flex flex-wrap ">
        
        
        <div className="w-full lg:w-4/12 px-4">
        <CardMisComidas></CardMisComidas>
        </div>
        <div className="w-full lg:w-8/12 px-4">
        <div class="relative flex w-full flex-wrap items-stretch mb-4">
        <input
            id="search"
            type="text"
            onChange={(e) => setQuery(e.target.value.includes(query))}
            placeholder="Buscar comida"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
        <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            <i class="fas fa-search"></i>
        </span>
    </div>
        <CardTablaNutricion data={Search(Comida)}></CardTablaNutricion>
                
        </div>
      </div>
      </div>
    </>
  );
}
