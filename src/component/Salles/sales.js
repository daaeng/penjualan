import React from 'react'
import { SiAudiomack } from 'react-icons/si';
import FilterTime from '../backpage/filterTime';
import Box from '../Dash/box';
import GabCard from '../backpage/GabCard/GabCard';

function Sales() {

  return (

    <>
      <div className=' sm:ml-14 md:ml-20 mr-3'>
          <div className='ml-2 mt-1'>
              <div className='grid grid-cols-2'>  
                  <h2 className='col-span-1 font-mono text-black items-center flex'>
                    <SiAudiomack className='mr-1' size={'20'}/>Dashboard Sales
                  </h2>

                  <div className='col-span-1 flex justify-end items-center font-mono text-black '>
                      <FilterTime />
                  </div>
              </div>
              <div className='border ' />
              <p className=''>
                Welcome, user
              </p>
          </div>

          <div className='mt-2 mb-2'>
              <Box/>
          </div>  

          <div>
            <GabCard/>
          </div>        

          <div className='ml-2 mt-3'>
            <h6>
              Penjualan
            </h6>
              <div className='border ml-20 -mt-4'/>
          </div>

          <div className='ml-2 mt-3'>
            <h6>
              Piutang
            </h6>
              <div className='border ml-20 -mt-4'/>
          </div>
          

      </div>
      
    </>
    
  )
}

export default Sales;