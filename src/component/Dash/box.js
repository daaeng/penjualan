import React from 'react'
import { BsShop } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
// flex flex-row space-x-8
// rounded-xl bg-green-500 bg-opacity-10 p-5 w-40 text-green-600
function Box () {
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-4  '>
        <div className='hover:bg-green-300 lg:col-span-2 col-span-1 bg-green-100 flex justify-between w-full  p-4 rounded-lg '>
            <BsShop size={25}/>
            <span className='text-sm'>
              Penjualan
              </span>
        </div>
          
        <div className='hover:bg-blue-300 lg:col-span-2 col-span-1 bg-blue-100 flex justify-between w-full  p-4 rounded-lg'>
            <MdPayments size={25}/>
            <span className='text-sm'>
                Pembayaran
            </span>
        </div>
          
    </div>
  )
}

export default Box