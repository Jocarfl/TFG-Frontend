import React, {useEffect, useState} from "react";
import CardRecomendacionesPaciente from "components/Cards/CardRecomendacionesPaciente"
import UserService from "services/user.service";
import AuthService from "services/auth.service";
import {motion}  from 'framer-motion/dist/framer-motion'
import { ResponsiveFontSize } from 'react-responsive-font-size'

const transition = {
  type: "spring",
  damping: 5,
  stiffness: 5
};

export default function Recomendaciones() {

  const [recomendaciones, setRecomendaciones] = useState([]);
  const id = AuthService.getCurrentUser().id;

  function getDate(date){
    const sDate = new Date(date);
    return sDate.getDate() + "/" + sDate.getMonth() +"/" + sDate.getFullYear();
  }

  useEffect(()=>{UserService.getRecomendacionesPaciente(id).then(data => {
    setRecomendaciones(data);
}).catch(err => console.log(err));},[recomendaciones])




  return (
    <>


    <div className="w-full px-12" >
    <ul>
      {recomendaciones.map((item)=>(
        <motion.li
        key={item._id}
        layout
        transition={transition}
        >
        <CardRecomendacionesPaciente
        statDate={getDate(item.date)}
        statTitle={item.title}
        statDescripiron={item.description}
        statCompleted = {item.completed}
        statId = {item._id}
        /> 
      </motion.li>
      ))}
</ul>

    

    </div>

    </>
  );
}
