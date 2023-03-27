import React from 'react'
import Search from '../Dash/search';
import {BiUserCircle, BiBell} from 'react-icons/bi'
import { NavDropdown } from 'react-bootstrap';
// import {NavLink} from 'react-router-dom'
// import {Dropdown } from 'react-bootstrap';
// import {MdDashboard, MdSettings, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
// import {BsFillPersonVcardFill} from 'react-icons/bs'
// import { FiMail } from 'react-icons/fi'

function Header() {
  
  return (

    <>
      <header className='flex flex-row w-screen bg-gray-100 space-x-2 justify-end'>
        <div className=" flex  space-x-1">
          <div className='flex flex-1 mb-1  space-x-2 text-gray-500 items-center'>
            <Search/>
            <BiBell size={'35'} className='cursor-pointer'/>
            <BiUserCircle size={'40'} className='cursor-pointer'/>
          </div>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

        </div>
      </header>
    </>
    
  )
}

export default Header;