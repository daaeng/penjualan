import React from 'react'
import { useState } from 'react'
import {GiChessBishop} from 'react-icons/gi'
import {NavLink, useNavigate} from 'react-router-dom'
import { MdDashboard, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {BsArrowLeftCircleFill, BsFillPersonVcardFill} from 'react-icons/bs'


const Sidebar2 = ({children}) => {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(true);

    const menu = [
        {name:'Dashboard', icon: <MdDashboard/>, path:'/'},
        {name:'Home', icon: <MdHome/>, path:'/home'},
        {name:'Pelanggan', icon: <BsFillPersonVcardFill/>, path:'/pel'},
        {name:'Penjualan', icon: <MdShoppingCartCheckout/>, path:'/dpen'},
        {name:'Pembayaran', icon: <MdPayments/>, path:'/dpem'},
        {name:'Item', icon: <MdShoppingBasket/>, path:'/item'},
        
    ];

    return(
        <>
            <nav className={`fixed bg-red-500 h-screen p-2 pt-10 duration-300 ${open ? 'w-48' : 'w-20'}`}>
                <div className='px-2 py-2'>
{/* 
                    <FaBars 
                        className={` text-2xl
                        absolute -right-8 top-5 cursor-pointer duration-75 ${!open && 'rotate-90'}` } 
                        onClick={()=> setOpen(!open)}/> */}

                    <BsArrowLeftCircleFill 
                        className={`text-white bg-dark-purple text-2xl rounded-full 
                        absolute -right-3 top-5 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}` } 
                        onClick={()=> setOpen(!open)}/>
                 
                        <div className='inline-flex ml-1.5'>
                            
                            <GiChessBishop className={`bg-white rounded-md text-4xl cursor-pointer block float-left mr-2 duration-500 ${!open && 'rotate-[360deg]'}`} onClick={()=> navigate('/')}/>
                            <h3 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                                    Shoping
                            </h3>
        
                        </div>
                </div>

                <div  className='menu mt-16'>
                                        
                {menu.map((val, index) => {
                    return (
                        <>
                            <NavLink
                                key = {index} 
                                to={val.path}
                                activeclassName='active'
                                className={`cursor-pointer no-underline flex flex-row duration-300 ${!open && 'active' }items-center text-gray-100 hover:bg-light-white hover:text-black rounded-xl px-2.5 py-4 -mr-5`} >
                                
                                        
                                        <div className={`ml-2 text-2xl `}>{val.icon}</div>
                                        <div className={`ml-2 duration-50 ${!open && 'hidden' }`} >{val.name}</div> 
                                        
                                

                            </NavLink>
                        </>
                    );
                })}
                <main>
                    {children}
                </main>
            </div>
            </nav>
        </>
    )
}

export default Sidebar2