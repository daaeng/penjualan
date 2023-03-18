import { useState } from 'react'
// import Logo from '../../assets/logo.png'
import { BiHomeAlt, BiGridAlt, BiIdCard } from 'react-icons/bi'
import { MdShoppingCartCheckout } from 'react-icons/md'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {GiChessBishop} from 'react-icons/gi'
import { BsBasket2 } from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

function Sidebar() {

    const navigate = useNavigate()
    const [open, setOpen] =  useState(true);

    const menu = [
        {name:'Dashboard', icon: <BiGridAlt/>},
        {name:'Home', icon: <BiHomeAlt/>},
        {name:'Pelanggan', icon: <BiIdCard/>},
        {name:'Penjualan', icon: <MdShoppingCartCheckout/>},
        {name:'Item', icon: <BsBasket2/>},
        
    ];

  return (
    <>
            
        <nav className = {` bg-red-500 h-screen p-2 pt-10 ${open ? 'w-48' : 'w-20'} duration-300 relative`}>

            <div className='py-2 px-2'>
                
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
                {/* <div className='flex flex-row items-center pt-8 '>
                    <img src={Logo} alt='sakir' className='w-9 h-9 mr-2'/>
                    <div>Shoping</div>
                </div> */}

                
            <div  className='mt-16'>
                                        
                {menu.map((val, index) => {
                    return (
                        <>
                            <li key = {index} 
                                className={`cursor-pointer flex flex-row items-center text-gray-100 hover:bg-light-white rounded-lg px-2.5 py-4`}>
                                       
                                    <div className={`ml-2 text-2xl `}>{val.icon}</div>
                                    <div className={`ml-2 duration-50 ${!open && 'hidden' }`} >{val.name}</div> 
                                    
                            </li>
                        </>
                    );
                })}

            </div>
        </nav>
    </>
  )
}

export default Sidebar;
