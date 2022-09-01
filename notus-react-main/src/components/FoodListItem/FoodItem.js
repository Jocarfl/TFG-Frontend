import React from 'react'

const FoodItem = ({ comida }) => {

  return (
  
      <li className='m-2' key={comida.id}>
        <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">            
              <ul type="button"
              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1"
                        >
                          {comida.nombre}
                        </ul>
                      
              </div>
      </li>
    
  )
}

export default FoodItem