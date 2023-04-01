import React, {useState } from 'react'
import {MdDashboard, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {BsFillPersonVcardFill, BsBellFill} from 'react-icons/bs'
import {NavLink, useNavigate} from 'react-router-dom'
import {SiBathasu} from 'react-icons/si'
import {GiConverseShoe} from 'react-icons/gi'
import {TfiLayoutSidebarLeft} from 'react-icons/tfi'
// import Search from '../Dash/search'
import { HiUserCircle } from 'react-icons/hi'


function Sdbar() {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(false);
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
        <header className='flex flex-row w-screen space-x-2 justify-end '>
            <div className=" flex  space-x-1">
                <div className='flex-1 mb-1 space-x-3 text-black items-center grid lg:grid-cols-3 gap-1'>
                    
                    <TfiLayoutSidebarLeft size={'20'} className={`cursor-pointer ml-3`} onClick={()=> setOpen(!open)}/>
                    <BsBellFill size={'25'} className='cursor-pointer'/>
                    <HiUserCircle size={'32'} className='cursor-pointer'/>
                    
                </div>

                    {/* <Search/> */}
            </div>
        </header>

        <nav className = {` bg-black h-screen mt-3 ml-4 rounded-xl py-2 pt-10 duration-300 ${open ? 'w-48' : 'w-20'} `}>
            
            <div className='py-2 px-3 overflow-hidden '>

                {/* <BsArrowLeftCircleFill 
                    className={`text-black bg-white text-2xl rounded-full 
                    absolute -ml-5 top-5 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}` } 
                    onClick={()=> setOpen(!open)}/> */}

                <div className='inline-flex ml-1.5 mb-16'>
                            
                    <SiBathasu className={`text-red-800 bg-black rounded-full text-4xl cursor-pointer 
                                block float-left mr-2 duration-500 hover:text-yellow-600  ${!open && 'rotate-[360deg]'}`} onClick={()=> navigate('/')}/>
                    <h3 className={`text-white cursor-pointer origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                            Converse
                    </h3>

                </div>

                <div className='flex justify-center rotate-12 -mt-9 mb-2'>
                    <GiConverseShoe className={`text-red-800 bg-black rounded-full text-4xl  
                                    block float-left mr-2 duration-500 hover:text-yellow-600  ${!open && 'rotate-[360deg] ml-4'}`}/>

                </div>

                {menu.map((val, index) => {
                    return (
                        <>
                            <NavLink
                                key = {index} 
                                to={val.path}
                                
                                className={`cursor-pointer no-underline flex flex-row duration-300 
                                ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                                hover:bg-light-white hover:text-yellow-600 rounded-lg px-2.5 py-4 -ml-2 -mr-2`} >
                                
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

export default Sdbar;
