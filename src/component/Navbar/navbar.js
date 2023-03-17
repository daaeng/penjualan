import React from 'react'
import {BiUserCircle, BiBell} from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

function Navbar() {
  
  return (

    <>
      <nav>
        
        <div className="pt-2 flex  space-x-3   bg-gray-50">
          <div className='cursor-pointer flex flex-1 justify-end mb-2 mr-3 space-x-3 text-gray-500 items-center'>
            <FiMail size={'25'}/>
            <BiBell size={'25'}/>
            <BiUserCircle size={'30'}/>
          </div>
        </div>
      
      </nav>

    </>
    
  )
}

export default Navbar;