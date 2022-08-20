import React , {useState,useEffect} from "react";
import UserService from "services/user.service";

// components

//getActividadesRecientes

export default function CardTablonActividad() {

  const [actividades, setActividades] = useState([]);


  useEffect(()=>{
   UserService.getActividadesRecientes().then(data => {
    setActividades(data);
}).catch(err => console.log(err));},[actividades])

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                TABLÓN DE ACTIVIDAD
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Usuario
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody>

            {actividades.map((item)=> (
                <tr key={item._id}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left">
                  {item.user}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4">
                  {item.description}
                </td>
                
              </tr>

              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
