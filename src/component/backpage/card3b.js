import React from 'react'
import Labeldt from '../backpage/label.js';
import Card3D from './card3d.js';

//container
function Card3b() {

  const title = () => {
    return ("Data e-Commerce")
  }

  const titleCard =()=>{
    return(
      ['Shopee']

    )
  }

  const titleCard2 =()=>{
    return(
      ['TokoPedia']

    )
  }

  const titleCard3 =()=>{
    return(
      ['Toko']

    )
  }
  
  return (
    
    <>
      <div className='flex p-3'> 
        <div className='w-full p-1 bg-marron'>
        <div className='ml-1'>
          <Labeldt title = {title}/>

        </div>
          
          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-1 rounded-md w-full'>
            <Card3D titleCard= {titleCard}/> 
            <Card3D titleCard= {titleCard2}/> 
            <Card3D titleCard= {titleCard3}/> 
          </div>
        </div>
        
      </div>
      
    </>
    
  )
}
  
export default Card3b;
  