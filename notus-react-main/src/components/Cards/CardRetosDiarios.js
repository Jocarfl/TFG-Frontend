import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import UserService from "services/user.service";
import AuthService from "services/auth.service";

export default function CardStats({
  statSubtitle,
  statTitle,
  statDescripiron,
  statId,
  statCompleted
}) {
  
  const [completado, setCompletado] = useState();

  const id = AuthService.getCurrentUser().id;
  const _elemento = "retos";

  useEffect(()=>{setCompletado(statCompleted);},)

  function marcarRetoCompletado(itemID) {
    console.log(itemID);
    UserService.marcarRetoComoCompletado(id,itemID);
    if(completado!=true){
      UserService.sumarPuntuacionAUsuarioPorElemento(id,_elemento);
    }

    setCompletado(statCompleted);
    
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "
                }
              >
             
             <button type="submit" onClick={() => marcarRetoCompletado(statId)} >
                <div  className={"text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 " + (completado !== true ? "bg-emerald-200 " : "bg-emerald-500 ") + " uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg"} >      
                <i className="fas fa-check"></i>
                </div>
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}


CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
