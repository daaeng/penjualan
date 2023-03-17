import React from 'react'
import {BiUserCircle, BiBell} from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

function Navbar() {
  
  return (

    <>
      <nav>
        
        <div className="pt-2 flex  space-x-3   bg-gray-50">
          <div className='flex flex-1 justify-end mb-2 mr-3 space-x-2 items-center'>
            <FiMail size={'25'}/>
            <BiBell size={'25'}/>
            <BiUserCircle size={'40'}/>
          </div>
        </div>
      
      </nav>

    </>
    
  )
}

export default Navbar;