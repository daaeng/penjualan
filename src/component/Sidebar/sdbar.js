import React, {useState } from 'react'
import {MdDashboard, MdShoppingBasket } from 'react-icons/md'
import {SiAudiomack} from 'react-icons/si'
import {FiLogOut} from 'react-icons/fi'
import {NavLink, useNavigate} from 'react-router-dom'
import {TfiLayoutSidebarLeft} from 'react-icons/tfi'
import {HiUserCircle, HiUser, HiLogout} from 'react-icons/hi'
import {BiSearch } from 'react-icons/bi'
import {RiSettings3Fill } from 'react-icons/ri'
import {FaBoxOpen } from 'react-icons/fa'
import {AiFillTags } from 'react-icons/ai'
import {BiMoneyWithdraw } from 'react-icons/bi'
import Logo from '../../assets/CandiWhite.png'


function Sdbar() {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(false);
    const [buka, setbuka] =  useState(false);
    const [bka, setBka] =  useState(false);
    // const geser = () => setOpen(!open);

    const menu = [
        {name:'Dashboard', icon: <MdDashboard/>, path:'/'},
        {name:'Sales', icon: <SiAudiomack/>, path:'/sales'},
        {name:'Finance', icon: <BiMoneyWithdraw/>, path:'/finance'},
        {name:'Logistik', icon: <FaBoxOpen/>, path:'/Logistik'},
        {name:'Merchandise', icon: <AiFillTags/>, path:'/MD'},
        {name:'Grosir', icon: <MdShoppingBasket/>, path:'/Grosir'},
        
    ];
    const menuHeader = [
        {name:'Profile', icon: <HiUser/>, path:''},
        {name:'Settings', icon: <RiSettings3Fill/>, path:''},
        {name:'Logout', icon: <HiLogout/>, path:''},
        
    ] 

    return (
    <>   
        <header className='grid grid-cols-2 p-2 bg-marron'>
            <div className='col-span-1 ml-2'>  

                <div className={`lg:w-48 md:w-44 sm:w-0`}>

                    <img src={Logo} alt='sakir' className={`cursor-pointer duration-500 hover:text-yellow-600`} onClick={()=> navigate('/')} />

                </div>
                {/* <h2 className=' font-mono text-black items-center flex'>
                    <MdDashboard className='mr-1' size={'20'}/> Dashboard
                </h2> */}
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
                        <FiLogOut size={'20'} className='cursor-pointer  hover:text-darkgolden'/>
                      
                    </div>
                </div>
            </div>

            <div className='flex justify-end -mr-150 bg-black'>
                <div className={`flex bg-gray-500 fixed ${bka ? 'mr-10' : 'show'}`}>
                    <ul className={`-ml-7 mr-1 mt-1 ${!bka  && 'hidden' }`}>
                        {menuHeader.map((val, index) => {
                            return(                 

                                <NavLink
                                    key = {index} 
                                    to={val.path}
                                    
                                    className={`cursor-pointer no-underline flex flex-row duration-300 
                                    ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                                    hover:bg-light-white hover:text-yellow-600  px-2`} >

                                    <li className='flex'>
                                        <div className={`mr-1 mt-0.5`}>{val.icon}</div>
                                        <div className={`text-1xl duration-50`} >{val.name}</div> 
                                    </li>

                                </NavLink>                           
                            );
                        })}
                    </ul>

                </div>
            </div>
        </header>
        
        <nav className = {`top-16 bg-marron h-fit mt-3 ml-4 rounded-xl py-2 pt-10 duration-300 ${open ? 'w-48' : ' sm:w-0 md:w-16 '} `}>
            
            <div className='sm:p-1 md:p-3 items-center '>
                
                {/* <div className={`inline-flex justify-center mb-16 `}>

                    <img src={Logo2} alt='sakir' className={`text-4xl cursor-pointer float-left duration-500 hover:text-yellow-600  ${!open && 'rotate-[0deg]'}`} onClick={()=> navigate('/')} />
        
                    <SiBathasu className={`text-dark-purple bg-marron rounded-full text-4xl cursor-pointer 
                                    float-left mr-2 duration-500 hover:text-yellow-600  ${!open && 'rotate-[360deg]'}`} onClick={()=> navigate('/')}/>
                        <h3 className={`text-white cursor-pointer origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                                Converse
                        </h3>

                </div> */}

                {/* <div className={`flex justify-center -ml-2 rotate-12 -mt-14 mb-5 `}>
                    <GiConverseShoe className={`text-white bg-marron rounded-full text-4xl  
                                    block float-left mr-2 duration-500 hover:text-yellow-600  ${!open && 'rotate-[360deg] ml-4'}`}/>

                </div> */}

                {menu.map((val, index) => {
                    return (

                            <NavLink
                                key = {index} 
                                to={val.path}
                                
                                className={`cursor-pointer no-underline flex flex-row duration-300 
                                ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                                hover:bg-light-white hover:text-yellow-600 rounded-lg px-2.5 py-4 -ml-2 -mr-2`} >
                                
                                        <div className={`ml-1 text-2xl `}>{val.icon}</div>
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
