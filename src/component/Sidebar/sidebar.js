import React, {useState } from 'react'
import {MdDashboard, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {BsFillPersonVcardFill, BsArrowLeftCircleFill} from 'react-icons/bs'
import {NavLink, useNavigate} from 'react-router-dom'
import {SiBathasu} from 'react-icons/si'
// import {GiChessBishop} from 'react-icons/gi'
// import {FaBars} from 'react-icons/fa'
// import Logo from '../../assets/logo.png'
//import { BiIdCard } from 'react-icons/bi'
//import { BsBasket2 } from 'react-icons/bs'


function Sidebar() {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(true);
    // const geser = () => setOpen(!open);

    const menu = [
        {name:'Dashboard', icon: <MdDashboard/>, path:'/'},
        {name:'Home', icon: <MdHome/>, path:'/home'},
        {name:'Pelanggan', icon: <BsFillPersonVcardFill/>, path:'/pel'},
        {name:'Penjualan', icon: <MdShoppingCartCheckout/>, path:'/dpen'},
        {name:'Pembayaran', icon: <MdPayments/>, path:'/dpem'},
        {name:'Item', icon: <MdShoppingBasket/>, path:'/item'},
        
    ];

  return (
    <>                                                                  
        <nav className = {` bg-black h-screen py-2 pt-10 duration-300 ${open ? 'w-48' : 'w-20'} `}>
            
            <div className='py-2 px-3 overflow-hidden '>
                
            <BsArrowLeftCircleFill 
                        className={`text-black bg-white text-2xl rounded-full 
                        absolute -right-3 top-5 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}` } 
                        onClick={()=> setOpen(!open)}/>
                    {/* onClick={()=> setOpen(!open)}     */}

                <div className='inline-flex ml-1.5 mb-16'>
                            
                    <SiBathasu className={`text-red-800 bg-black rounded-full text-4xl cursor-pointer 
                                block float-left mr-2 duration-500 hover:text-yellow-600  ${!open && 'rotate-[360deg]'}`} onClick={()=> navigate('/')}/>
                    <h3 className={`text-white cursor-pointer origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                            Shoping
                    </h3>

                </div>

                {menu.map((val, index) => {
                    return (
                        <>
                            <NavLink
                                key = {index} 
                                to={val.path}
                                
                                className={`cursor-pointer no-underline flex flex-row duration-300 
                                ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                                hover:bg-light-white hover:text-yellow-600 rounded-xl px-2.5 py-4 -ml-1 -mr-7`} >
                                
                                        
                                        <div className={`ml-2 text-2xl `}>{val.icon}</div>
                                        <div className={`ml-2 duration-50 ${!open && 'hidden' }`} >{val.name}</div> 
                                        
                                

                            </NavLink>
                        </>
                    );
                })}

            </div>
            
 
        </nav>
    </>
  )
}

export default Sidebar;
