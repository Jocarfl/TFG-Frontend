import React from "react";

// components

export default function CardSocialTraffic() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                TABLA CLASIFICACIÓN
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Puesto
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Usuario
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                  Puntos (Semanales)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-left">
                  1
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                  Josep Carreres
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 240
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-left">
                  2
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                  Joan Ascó
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 220
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-left">
                  3
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                  Raquel Estruch
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 200
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4 text-left">
                  4
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                  Patricia Garrido
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-x whitespace-nowrap p-4">
                 150
                </td>
              </tr>
        
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
