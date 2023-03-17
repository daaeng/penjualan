import React from 'react'
import { BsShop } from "react-icons/bs";
import { MdPayments } from "react-icons/md";

function Box () {
  return (
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
  )
}

export default Box