import React from 'react'
import {BiUserCircle, BiBell} from 'react-icons/bi'
// import { FiMail } from 'react-icons/fi'
import Search from '../Dash/search';

function Header() {
  
  return (

    <>
      <header className='flex flex-row w-screen bg-gray-100 space-x-2 justify-end'>
        <div className=" flex  space-x-1  ">
          <div className='flex flex-1 mb-1  space-x-3 text-gray-500 items-center'>
            <Search/>
            <BiBell size={'35'} className='cursor-pointer'/>
            <BiUserCircle size={'40'} className='cursor-pointer'/>
          </div>
        </div>
      </header>
    </>
    
  )
}

export default Header;