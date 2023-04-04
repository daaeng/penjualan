import React, {useState } from 'react'
import {MdDashboard, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {BsFillPersonVcardFill, BsBellFill} from 'react-icons/bs'
import {NavLink, useNavigate} from 'react-router-dom'
import {SiBathasu} from 'react-icons/si'
import {GiConverseShoe} from 'react-icons/gi'
import {TfiLayoutSidebarLeft} from 'react-icons/tfi'
import {HiUserCircle, HiUser, HiLogout} from 'react-icons/hi'
import {BiSearch } from 'react-icons/bi'
import {RiSettings3Fill } from 'react-icons/ri'


function Sdbar() {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(false);
    const [buka, setbuka] =  useState(false);
    const [bka, setBka] =  useState(false);
    // const geser = () => setOpen(!open);

    const menu = [
        {name:'Dashboard', icon: <MdDashboard/>, path:'/'},
        {name:'Home', icon: <MdHome/>, path:'/home'},
        {name:'Pelanggan', icon: <BsFillPersonVcardFill/>, path:'/pel'},
        {name:'Penjualan', icon: <MdShoppingCartCheckout/>, path:'/dpen'},
        {name:'Pembayaran', icon: <MdPayments/>, path:'/dpem'},
        {name:'Item', icon: <MdShoppingBasket/>, path:'/item'},
        
    ];
    const menuHeader = [
        {name:'Profile', icon: <HiUser/>, path:''},
        {name:'Settings', icon: <RiSettings3Fill/>, path:''},
        {name:'Logout', icon: <HiLogout/>, path:''},
        
    ] 

  return (
    <>   
        <header className='flex flex-row w-screen    space-x-2 justify-end bg-blue-100'>
            <div className=" flex space-x-1">

                <div className={`-mt-1 ${!buka ? null : 'w-64'} `}>
                    <div className={`border border-gray-200 ${!buka  && 'hidden' } rounded-full w-full flex py-1 px-1 mt-1 items-center `}>

                        <input type={'text'} className ={`rounded flex-1 ml-1 mr-16 focus:outline-none focus:ring focus:border-blue-500`} placeholder = ' Search'/>
                        <button type='submit' className='md:-ml-14 mr-1 bg-gray-200 px-1 py-1 rounded-md hover:bg-green-100'>
                            <BiSearch className='duration-300'/>
                        </button>
                    </div>
                </div>

                <div className='flex flex-1 mb-1 mr-2 space-x-3 text-marron items-center'>
                    
                    <BiSearch size={'25'} className={`cursor-pointer  hover:text-darkgolden ml-3`} onClick={()=> setbuka(!buka)}/>
                    <TfiLayoutSidebarLeft size={'22'} className={`cursor-pointer  hover:text-darkgolden ml-3`} onClick={()=> setOpen(!open)}/>
                    <BsBellFill size={'25'} className='cursor-pointer  hover:text-darkgolden'/>
                    <HiUserCircle size={'32'} className={`cursor-pointer  hover:text-darkgolden`} onClick={() => setBka(!bka)}/>
                    

                </div>
            </div>

            <div className={`bg-gray-200 mt-32 fixed ${bka ? 'mr-10' : 'show'}`}>
                <ul className={`-ml-7 mr-1 mt-1 ${!bka  && 'hidden' }`}>
                    {menuHeader.map((val, index) => {
                        return (
                            <>
                                <NavLink
                                    key = {index} 
                                    to={val.path}
                                    
                                    className={`cursor-pointer no-underline flex flex-row duration-300 
                                    ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                                    hover:bg-light-white hover:text-yellow-600 px-2`} >
                                    <div className={`mr-1 mt-0.5`}>{val.icon}</div>
                                    <div className={`duration-50`} >{val.name}</div> 

                                </NavLink>
                            </>
                        );
                    })}
                </ul>
            </div>
        </header>

        <nav className = {` bg-marron h-fit mt-3 ml-4 rounded-xl py-2 pt-10 duration-300 ${open ? 'w-48' : 'w-20'} `}>
            
            <div className='py-2 px-3 overflow-hidden '>

                {/* <BsArrowLeftCircleFill 
                    className={`text-black bg-white text-2xl rounded-full 
                    absolute -ml-5 top-5 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}` } 
                    onClick={()=> setOpen(!open)}/> */}

                <div className='inline-flex ml-1.5 mb-16'>
                            
                <SiBathasu className={`text-dark-purple bg-marron rounded-full text-4xl cursor-pointer 
                                block float-left mr-2 duration-500 hover:text-yellow-600  ${!open && 'rotate-[360deg]'}`} onClick={()=> navigate('/')}/>
                    <h3 className={`text-white cursor-pointer origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                            Converse
                    </h3>

                </div>

                <div className='flex justify-center rotate-12 -mt-14 mb-5'>
                    <GiConverseShoe className={`text-white bg-marron rounded-full text-4xl  
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
