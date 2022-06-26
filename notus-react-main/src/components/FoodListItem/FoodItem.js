import React,{useState,useEffect} from 'react'
import { createPopper } from "@popperjs/core";

const FoodItem = ({ comida, deleteFood }) => {
    const [popoverShow, setPopoverShow] = React.useState(false);
    const btnRef = React.createRef();
    const popoverRef = React.createRef();
    const openTooltip = () => {
      createPopper(btnRef.current, popoverRef.current, {
        placement: "top"
      });
      setPopoverShow(true);
    };
    const closeTooltip = () => {
      setPopoverShow(false);
    };
  return (
  
      <li className='m-2' key={comida.id}>
        <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">            
              <button type="button"
              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1"
                        >
                          {comida.nombre}
                        </button>
                <button
                  className='btn btn-sm btn-danger pl-2 mr-4'
                  onClick={()=>deleteFood(comida.id)}              
                >
                  <i className='far fa-trash-alt'></i>
                </button>
              </div>
      </li>
    
  )
}

export default FoodItem