import React from 'react'



export const BuyScreen = () => {


  return (

    <div className='d-column aling-items-center '>
       
        <div className=' d-flex justify-content-center align-content-center  border border-color '>
         <p>Select a paymet method</p>
         <select className="form-select mb-5 sm-bg-white" aria-label="Default select example">
          <option className=' '>Visa 049050...</option>
          <option>MasterCard 06059050...</option>
          <option>Leon 049004050...</option>
         </select>

         <button className='mt-5'>Procced</button>        
        </div>
        
        
    </div>
  )
}
