import React from "react";

// components

import CardRetosDiarios from "components/Cards/CardRetosDiarios";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
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
        </div>
      </div>
    </>
  );
}
