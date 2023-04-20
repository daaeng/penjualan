import React from 'react'
import Labeldt from '../backpage/label.js';


function Card3b() {

  const title = () => {
    return ("Data Pelanggan")
  }
  
  return (
    
    <>
      <div className='flex p-3 ml-1 mr-1'> 
        <div className='w-full p-1 bg-marron'>
        <div className='ml-1'>
          <Labeldt title = {title}/>

        </div>
          
          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 rounded-md w-full'>
            
            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-1'>
              aa
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-1'>
              bb
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-1'>
              cc
            </div>
            
          </div>

        </div>

        
      </div>
      
    </>
    
  )
}
  
export default Card3b;
  