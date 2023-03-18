import React from 'react'
import {BiUserCircle, BiBell} from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

function Header() {
  
  return (

    <>

      <header className='flex flex-row bg-gray-100 space-x-2 justify-end'>
        <div className=" flex  space-x-1  ">
          <div className='cursor-pointer   flex flex-1 mb-1  space-x-4 text-gray-500 items-center'>
            <FiMail size={'25'}/>
            <BiBell size={'25'}/>
            <BiUserCircle size={'30'}/>
          </div>
        </div>
      </header>
    </>
    
  )
}

export default Header;