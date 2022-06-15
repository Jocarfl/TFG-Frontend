import React from "react";

// components

import CardGraficaPeso from "components/Cards/CardGraficaPeso";
import CardInfoPerfil from "components/Cards/CardInfoPerfil";
import CardTablonActividad from "components/Cards/CardTablonActividad";
import CardClasificacion from "components/Cards/CardClasificacion";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardGraficaPeso />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardInfoPerfil />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardTablonActividad />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardClasificacion />
        </div>
      </div>
    </>
  );
}
