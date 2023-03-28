import React from 'react'
import Search from '../Dash/search';
import {HiUserCircle} from 'react-icons/hi'
import {BsBellFill} from 'react-icons/bs'
// import { NavDropdown } from 'react-bootstrap';
// import {NavLink} from 'react-router-dom'
// import {Dropdown } from 'react-bootstrap';
// import {MdDashboard, MdSettings, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
// import { FiMail } from 'react-icons/fi'

function Header() {
  
  return (

    <>
      <header className='flex flex-row w-screen space-x-2 justify-end bg-black'>
        <div className=" flex  space-x-1">
          <div className='flex flex-1 mb-1 mr-2 space-x-3 text-yellow-600 items-center'>
            <Search/>
            <BsBellFill size={'30'} className='cursor-pointer'/>
            <HiUserCircle size={'40'} className='cursor-pointer'/>
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