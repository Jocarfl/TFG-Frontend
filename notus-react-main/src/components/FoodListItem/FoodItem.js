import React,{useState,useEffect} from 'react'
import { createPopper } from "@popperjs/core";

const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const FoodItem = ({ myfood, deleteFood }) => {
  const [books, setbooks]=useState(getDatafromLS());
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
    <li>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">            
              <button type="button"
              onMouseEnter={openTooltip}
              onMouseLeave={closeTooltip}
              ref={btnRef}
              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1"
                        >
                          {books[0].nombre}
                        </button>
                <button
                  className='btn btn-sm btn-danger pl-2 mr-4'
                  onClick={()=>deleteFood(books[0].id)}              
                >
                  <i className='far fa-trash-alt'></i>
                </button>
              </span>
      </li>
  )
}

export default FoodItem