import React from 'react'
import {BsFillEmojiWinkFill} from 'react-icons/bs'
import {FaEdit} from 'react-icons/fa'
// import Modet from './moDetPla';

function Planggan() {

  return (

    <>
      <div className={`ml-24 mb-4 flex-wrap w-full`}>

        <div className={`px-8 flex-1 pt-3 bg-`}>

          <h2 className='font-mono text-black'>Pelanggan</h2>

          <div className='px-1 flex-1 pt-2 pb-2 text-gray-200'>
          _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
          </div>
            
        </div>
        
        <div className='md:w-auto lg:w-full grid lg:grid-cols-3 gap-4 p-4  '>

          <div className='bg-gray-300 rounded-lg grid lg:grid-cols-4 gap-4 p-4  ml-8 mr-8 mb-2'>
              
              <div className='lg:col-span-1 px-1 py-1 bg-slate-300 flex justify-center rou'>
                <BsFillEmojiWinkFill size={'50'}/>
              </div>

              <div className='lg:col-span-2 bg-white px-1 py-1 items-center'>
              <p className='-mb-1'>Nama</p>
              Grand total Pembelian Rp. -

              </div>
                  
              <div className='cursor-pointer lg:col-span-1 text-white flex justify-center px-4 py-3 rounded bg-black '>
                <FaEdit className='text-yellow-600 hover:text-white'/>
                Detail
              </div>
          </div>

          

        </div>
            <h3 className='ml-7'>Tes tes</h3>
      
      </div>
      
    </>
    
  )
}

export default Planggan;