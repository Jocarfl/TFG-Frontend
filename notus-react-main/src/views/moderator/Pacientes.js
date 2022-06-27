import Pagination from 'components/Pagination/Pagination';
import React, { useState, useMemo } from 'react';
import PropTypes from "prop-types";
import {Comida} from "BaseDatosComida/ComidaBD";

let PageSize = 10;



export default function Pacientes({ color }) {
  
    const data = Comida;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
    <div className="  flex flex-wrap ">
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Comida
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      
                  }
                >
                  PORCIÓN (100G)
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                >
                  Energía(KJ)
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                >
                  Calorias(Kcal)
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                >
                  Grasa(G)
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                >
                  Proteína(G)
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
            {currentTableData.map((item) => (
              <tr key={item.id}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-left flex items-center">

                  <span
                    className={
                      "ml-3 font-bold text-blueGray-600"
                    }
                  >
                    {item.nombre}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                {Math.trunc(item.energiaT)}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                {Math.trunc(item.energiaT*0.238846)}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                   {item.grasaT}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                {item.proteinaT}
                </td>
              </tr>
              ))}
            </tbody>
            <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}/> 
          </table>
        </div>
        </div>
      </div>
    </>
  );
}

Pagination.defaultProps = {
  color: "light",
};

Pagination.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
