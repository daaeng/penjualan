import React, {useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Logo from '../../assets/CandiWhite.png'
import {FiLogOut} from 'react-icons/fi'
import {FaBoxOpen } from 'react-icons/fa'
import {AiFillTags } from 'react-icons/ai'
import {SiAudiomack} from 'react-icons/si'
import {RiSettings3Fill } from 'react-icons/ri'
import {MdShoppingBasket } from 'react-icons/md'
import {TfiLayoutSidebarLeft} from 'react-icons/tfi'
import {BiSearch, BiMoneyWithdraw } from 'react-icons/bi'
import {HiUserCircle, HiUser} from 'react-icons/hi'

function Sdbar() {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(false);
    const [buka, setbuka] =  useState(false);
    const [bka, setBka] =  useState(false);

    const menu = [
        // {name:'Dashboard', icon: <MdDashboard/>, path:'/dash'},
        {name:'Sales', icon: <SiAudiomack/>, path:'/sales'},
        {name:'Finance', icon: <BiMoneyWithdraw/>, path:'/finance'},
        {name:'Logistik', icon: <FaBoxOpen/>, path:'/Logistik'},
        {name:'Merchandise', icon: <AiFillTags/>, path:'/MD'},
        {name:'Grosir', icon: <MdShoppingBasket/>, path:'/Grosir'},
    ];
    const menuHeader = [
        {name:'Profile', icon: <HiUser/>, path:''},
        {name:'Settings', icon: <RiSettings3Fill/>, path:''},
        // {name:'Logout', icon: <HiLogout/>, path:'/'},
    ] 

    const LogOut = () => {
        localStorage.removeItem("userData")
        // sessionStorage.removeItem("User")
        localStorage.clear()
        navigate('/')
    };

    return (
    <>   
        <header className='grid grid-cols-2 p-2 bg-marron rounded-bl-3xl '>
            <div className='flex col-span-1 h-9 -mr-5 -mt-6 -mb-10'>
                <div className='flex justify-end ml-60 rounded-bl-70px bg-red-800 w-full'>
                    .
                </div>
            </div>

            <div className='flex col-span-1 -mr-2 -mt-11 -mb-4'>
                <div className='flex justify-end h-14 rounded-bl-70px -mb-14 bg-red-900 w-full'>
                    .
                </div>
            </div>

            <div className='col-span-1 ml-2'>  
                <div className={`lg:w-48 md:w-44 sm:w-32`}>
                    <img src={Logo} alt='sakir' className={`cursor-pointer duration-500 hover:text-yellow-600`} onClick={()=> navigate('/dash')} />
                </div>
            </div>

            <div className='col-span-1 mr-2 flex justify-end items-center font-mono text-black '>
                <div className=" flex space-x-1">

                    <div className={`-mt-1 ${!buka ? null : 'md:w-44 sm:w-40'} -mr-2`}>
                        <div className={`border border-gray-200 ${!buka  && 'hidden' } rounded-full w-full flex py-1 px-1 mt-1 items-center `}>

                            <input type={'text'} className ={`sm:w-20 rounded flex-1 ml-1 mr-16 focus:outline-none focus:ring focus:border-blue-500`} placeholder = ' Search'/>
                            <button type='submit' className='sm:-ml-16 md:-ml-14 mr-1 bg-gray-200 px-1 py-1 rounded-md hover:bg-green-100'>
                                <BiSearch className='duration-300'/>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-1 mb-1 mr-2 space-x-3 text-white items-center'>
                        
                        <BiSearch size={'23'} className={`cursor-pointer  hover:text-darkgolden ml-3`} onClick={()=> setbuka(!buka)}/>
                        <TfiLayoutSidebarLeft size={'20'} className={`cursor-pointer  hover:text-darkgolden ml-3`} onClick={()=> setOpen(!open)}/>
                        <HiUserCircle size={'28'} className={`cursor-pointer  hover:text-darkgolden`} onClick={() => setBka(!bka)}/>
                        
                        <FiLogOut  size={'20'} className='cursor-pointer  hover:text-darkgolden' onClick={LogOut}/>
                      
                    </div>
                </div>
            </div>

            <div className='col-span-2 flex justify-end bg-black'>
                <div className={`flex rounded-b-xl bg-gray-500 fixed ${bka ? 'mr-10' : 'show'}`}>
                    <ul className={`-ml-7 mr-1 mt-1 ${!bka  && 'hidden' }`}>
                        {menuHeader.map((val, index) => {
                            return(                 
                                <NavLink
                                    key = {index} 
                                    to={val.path}
                                    
                                    className={`cursor-pointer no-underline flex flex-row duration-300 
                                    ${!bka && 'active' } text-gray-100 overflow-y-visible
                                    hover:bg-light-white hover:text-yellow-600 w-36 px-2`} >

                                    <li className='flex items-center'>
                                        <div className={`mr-1 mt-0.5 `}>{val.icon}</div>
                                        <div className={`text-1xl duration-50`} >{val.name}</div> 
                                    </li>
                                </NavLink>                           
                            );
                        })}
                    </ul>
                </div>
            </div>

        </header>
        
        <nav className = {`top-16 bg-marron h-fit mt-3 lg:ml-4 md:ml-4 sm:ml-1 rounded-xl py-2 pt-10 duration-300 ${open ? 'w-48' : ' sm:w-10 md:w-16 '} `}>
            
            <div className='sm:p-1 md:p-3 items-center '>

                {menu.map((val, index) => {
                    return (
                        <NavLink
                            key = {index} 
                            to={val.path}               
                            className={`cursor-pointer no-underline flex flex-row duration-300 
                            ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                            hover:bg-light-white hover:text-black rounded-lg px-2.5 py-4 -ml-2 -mr-2`} >
                                    <div className={`ml-1 text-2xl `}>
                                        {val.icon}
                                    </div>
                                    <div className={`ml-2 duration-50 ${!open && 'hidden'}`} >{val.name}</div> 
                        </NavLink>
                    );
                })}

            </div>
            
        </nav>
    </>
  )
}

export default Sdbar;
