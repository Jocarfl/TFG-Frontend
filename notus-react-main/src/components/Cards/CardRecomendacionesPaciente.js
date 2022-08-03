import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import UserService from "services/user.service";
import AuthService from "services/auth.service";

export default function CardStats({
  statDate,
  statTitle,
  statDescripiron,
  statCompleted,
  statId,
}){


const [completado, setCompletado] = useState();

useEffect(()=>{setCompletado(statCompleted);},)



function setCompleted (itemID) {
  const id = AuthService.getCurrentUser().id;

  UserService.marcarRecomendacionComoCompletada(id,itemID);
  setCompletado(statCompleted);
}


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 mt-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-8">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-6 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs mb-1">
                {statDate} 
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle.toUpperCase()} 
              </span>
              <p className=" text-xl text-blueGray-400 mt-4 ">
            <span >{statDescripiron} </span>
          </p>
            </div>
            <div className="relative w-auto pl-6 mt-4 flex-initial ">
              <div
                className={
                  "text-white p-1 text-center inline-flex bg-blueGray-300 items-center justify-center w-12 h-12 shadow-lg squared-full "
                }
              >
                <button type="submit" onClick={() => setCompleted(statId)}>
                <div  className={"text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 " + (completado !== true ? "bg-emerald-200 " : "bg-emerald-500 ") + " uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg"} >      
                <i className="fas fa-check"></i>
                </div>
                </button>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}


CardStats.propTypes = {
  statDate: PropTypes.string,
  statTitle: PropTypes.string,
  statDescripiron: PropTypes.string,
  statCompleted: PropTypes.bool,
  statId: PropTypes.string,
};
