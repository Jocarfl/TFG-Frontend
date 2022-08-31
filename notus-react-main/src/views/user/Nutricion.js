import React from "react";

import CardTablaNutricion from "components/Cards/CardTablaNutricionNEW";
import CardMisComidas from "components/Cards/CardMisComidas";

export default function Tables() {

  return (
    <>
      <div>
        <div className="flex flex-wrap ">      
          <div className="w-full lg:w-4/12 px-4">
            <CardMisComidas></CardMisComidas>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <CardTablaNutricion ></CardTablaNutricion>           
          </div>
        </div>
        </div>
    </>
  );
}
