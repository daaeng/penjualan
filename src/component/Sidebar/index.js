import { Children, useState } from 'react'
// import Logo from '../../assets/logo.png'
//import { BiIdCard } from 'react-icons/bi'
import {MdDashboard, MdHome, MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {BsFillPersonVcardFill} from 'react-icons/bs'
import {GiChessBishop} from 'react-icons/gi'
import {FaBars} from 'react-icons/fa'
//import { BsBasket2 } from 'react-icons/bs'
import {NavLink, useNavigate} from 'react-router-dom'

function Sidebar({Children}) {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(true);
    const geser = () => setOpen(!open);

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
        <nav className = {`bg-red-700 h-screen p-2 pt-10 duration-300 ${open ? 'w-48' : 'w-20'} `}>

            <div className='py-2 px-2'>
                
                <FaBars 
                    className={` text-2xl
                    absolute -right-8 top-5 cursor-pointer duration-75 ${!open && 'rotate-90'}` } 
                    onClick={geser}/>
                    {/* onClick={()=> setOpen(!open)}     */}

                <div className='inline-flex ml-1.5 mb-16'>
                            
                    <GiChessBishop className={`bg-white rounded-md text-4xl cursor-pointer block float-left mr-2 duration-500 ${!open && 'rotate-[360deg]'}`} onClick={()=> navigate('/')}/>
                    <h3 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                            Shoping
                    </h3>

                </div>

                {menu.map((val, index) => {
                    return (
                        <>
                            <NavLink
                                key = {index} 
                                to={val.path}
                                activeclassName='active'
                                className={`cursor-pointer no-underline flex flex-row duration-300 
                                ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                                hover:bg-light-white hover:text-black rounded-xl px-2.5 py-4 -ml-1 -mr-7`} >
                                
                                        
                                        <div className={`ml-2 text-2xl `}>{val.icon}</div>
                                        <div className={`ml-2 duration-50 ${!open && 'hidden' }`} >{val.name}</div> 
                                        
                                

                            </NavLink>
                        </>
                    );
                })}

            </div>

            <main>{Children}</main> 
        </nav>
    </>
  )
}

export default Sidebar;
