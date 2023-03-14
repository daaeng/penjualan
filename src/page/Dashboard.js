
import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import { BiSearch } from 'react-icons/bi';
import { BsShop } from "react-icons/bs";
import { MdPayments } from "react-icons/md";


import Data_grafGAB from '../chart/data_grafGAB';
import Pembayaran from '../chart/pembayaran';
import Penjualan from '../chart/penjualan';


function Dashboard() {
  
  const [value, onChange] = useState(new Date());

  return (

    <>

      
      <div className='px-14 flex-1 pt-14 ml-5 mr-8'>

        <div className='border border-gray-200  rounded w-full flex py-3 px-3 items-center'>
          <BiSearch/>
          <input type={'text'} className = 'flex-1' placeholder = 'Search'/>
        </div>
        
        <div className='px-10 flex-1 pt-10 ml-5'>
          
          <div className='flex flex-row space-x-8 '>
            <div className=' rounded-xl bg-green-500 bg-opacity-10 p-5 w-40 text-green-600'>
              <BsShop size={25}/>
              <span className='text-sm'>
              Penjualan
              </span>
            </div>
          
            <div className=' rounded-xl bg-yellow-500 bg-opacity-10 p-5 w-40 text-green-600'>
              <MdPayments size={25}/>
              <span className='text-sm'>
              Pembayaran
              </span>
            </div>
            
          </div>

          <div className='px-1 flex-1 pt-2'>
            <div className='mr-2 pt-2 px-3 flex flex-row space-x-5 text-gray-500 justify-end'>
            <div className='mr-3 ml-3 mt-3  '>
              
              <DatePicker onChange={onChange} value={value}/>

            </div>
            </div>
          </div>

        </div>

      </div>
      
      <div className='flex flex-row space-x-2 ml-10 mr-10 pt-2'>

          <div className='px-3 pt-14 ml-2 mb-5 rounded-xl bg-gray-100'>

            <Penjualan/>
            
          </div>

          <div className='px-3 pt-14 ml-2 mb-5 rounded-xl bg-gray-100'>

            <Pembayaran/>
            
          </div>
          
      </div>

      <div className='pt-2 ml-12 mr-14 rounded-xl mb-5'>
        <div className='rounded-xl bg-gray-100 px-3'>
        <Data_grafGAB/>

        </div>
      </div>
      

        
    </>
    
  )
}

export default Dashboard;