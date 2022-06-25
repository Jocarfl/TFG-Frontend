import React from "react";
import TableDropdown from "components/Dropdowns/TableDropdown.js";

// components

export default function CardSocialTraffic({ color,data }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
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
                Comidas
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <tbody>
            <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Desayuno
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  
                </th>
    
              </tr>
              <tr >
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 KJ
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-right">
                  <TableDropdown></TableDropdown>
                </td>
              </tr>


              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Almuerzo
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >                
                </th>          
              </tr>
              <tr >
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 KJ
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-right">
                  <TableDropdown></TableDropdown>
                </td>
              </tr>

              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Comida
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >                
                </th>          
              </tr>
              <tr >
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 KJ
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-right">
                  <TableDropdown></TableDropdown>
                </td>
              </tr>

              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Merienda
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >                
                </th>          
              </tr>
              <tr >
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 KJ
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-right">
                  <TableDropdown></TableDropdown>
                </td>
              </tr>

              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Cena
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >                
                </th>          
              </tr>
              <tr >
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
  lightBlue
</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-right">
                  <TableDropdown></TableDropdown>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
