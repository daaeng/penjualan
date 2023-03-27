import React from 'react'
import Search from '../Dash/search';
import {BiUserCircle, BiBell} from 'react-icons/bi'
<<<<<<< HEAD
// import { NavDropdown } from 'react-bootstrap';
// import {NavLink} from 'react-router-dom'
// import {Dropdown } from 'react-bootstrap';
// import {MdDashboard, MdSettings, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
// import {BsFillPersonVcardFill} from 'react-icons/bs'
// import { FiMail } from 'react-icons/fi'
=======
// import { FiMail } from 'react-icons/fi'
import Search from '../Dash/search';
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066

function Header() {
  
  return (

    <>
<<<<<<< HEAD
      <header className='flex flex-row w-screen space-x-2 justify-end'>
        <div className=" flex  space-x-1">
          <div className='flex flex-1 mb-1 mr-2 space-x-2 text-gray-500 items-center'>
=======
      <header className='flex flex-row w-screen bg-gray-100 space-x-2 justify-end'>
        <div className=" flex  space-x-1  ">
          <div className='flex flex-1 mb-1  space-x-3 text-gray-500 items-center'>
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066
            <Search/>
            <BiBell size={'35'} className='cursor-pointer'/>
            <BiUserCircle size={'40'} className='cursor-pointer'/>
          </div>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}

        </div>
      </header>

      {/* <div className='bg-red-200 flex flex-row text-gray-500 justify-end'>
        contoh
        <div className='bg-blue-300 mr-6 w-52 h-60'>
          aaa
        </div>
      </div> */}
    </>
    
  )
}

export default Header;