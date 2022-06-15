import React from "react";
import { useEffect, useState } from "react";
import {Comida} from "BaseDatosComida/ComidaBD";
import CardTablaNutricion from "components/Cards/CardTablaNutricion";


export default function Tables() {

  const [query, setQuery] = useState("");

  const Search = (data) => {
      return data.filter( (item)=> item.nombre.toLowerCase().includes(query));
  };
  
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}/> {<CardTablaNutricion data={Search(Comida)}/>}
        </div>
      </div>
    </>
  );
}
