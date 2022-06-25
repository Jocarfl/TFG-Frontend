import React,{Component} from "react";
import AuthService from "services/auth.service";
import { createPopper } from "@popperjs/core"

// components

const CardInfoComida = () => {
    
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
        <>
         < div className = "relative flex flex-col min-w-0 break-words bg-white w-full mb-5 shadow-xl rounded-lg " >
             <div className="px-6">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 text-center mt-20">
                </div>
            </div>
            <div className="text-center mt-5">
                <h3
                    className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    
                </h3>
            </div>
        </div>
    </div>
</>
    );
}

export default CardInfoComida;