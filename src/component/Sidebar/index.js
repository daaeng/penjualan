import React from 'react'
import Logo from '../../assets/logo.png'

export default function Sidebar() {

    const menu = [
        {name:'Dashboard', icon:''},
        {name:'Home', icon:''},
        {name:'Pelanggan', icon:''},
        {name:'Penjualan', icon:''},
        {name:'Item', icon:''},
        
    ]

  return (
    <div className='h-screen border-r border-gray-600 w-64 px-10'>
        <div className='flex flex-row items-center'>
            <img src={Logo} alt='sakir' className='w-10 h-10 '/>
            <div>Shoping</div>
        </div>

        <div className='flex flex-row font-light left-1'>
            <ul>
                <div>Menu</div>
                {menu.map((val, index) => {
                    return (
                        <li key = {index} className='mb-7'>
                            {val.name} 
                        </li>
                    );
                })}
            </ul>
        </div>
        
    </div>
  )
}
