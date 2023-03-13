import React from 'react'
import Logo from '../../assets/logo.png'
import { BiHomeAlt, BiGridAlt, BiIdCard } from 'react-icons/bi'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { BsBasket2 } from 'react-icons/bs'

export default function Sidebar() {

    const menu = [
        {name:'Dashboard', icon: <BiHomeAlt/>},
        {name:'Home', icon: <BiGridAlt/>},
        {name:'Pelanggan', icon: <BiIdCard/>},
        {name:'Penjualan', icon: <MdShoppingCartCheckout/>},
        {name:'Item', icon: <BsBasket2/>},
        
    ];

  return (
    <>
        
        <div className='bg-red-400 h-screen border-r border-gray-200 w-64 px-9 space-y-7'>
            <div className='flex flex-row items-center pt-8 '>
                <img src={Logo} alt='sakir' className='w-9 h-9 '/>
                <div>Shoping</div>
            </div>

            {/* className='flex flex-row font-light left-1' */}

            <div className='text-red-700'>
                ____________________________
                
            </div>
            
            <div  className='space-y-7 '>
                <ul>
                    <div className='mb-10'></div>
                    {menu.map((val, index) => {
                        return (
                            <li key = {index} 
                                className='mb-7 flex flex-row items-center text-gray-100'>

                                <div className='mr-3'>{val.icon}</div>
                                <div>{val.name}</div> 
                            
                            </li>
                        );
                    })}
                </ul>
            </div>
            
        </div>
    </>
  )
}
