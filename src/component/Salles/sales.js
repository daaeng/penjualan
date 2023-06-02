import React from 'react'
import { SiAudiomack } from 'react-icons/si';
import FilterTime from '../backpage/filterTime';
import Box from '../Dash/box';
import GabCard from '../backpage/GabCard/GabCard';
import DataPenjual from './DataPenjual';
import DataPiutang from './DataPiutang';

function Sales() {

  return (

    <>
      <div className=' sm:ml-8 md:ml-8 lg:ml-14 mr-3'>
        <div className='mt-1'>
            <div className=''>  
              <h2 className='font-mono text-black items-center flex'>
                <SiAudiomack className='mr-1' size={'20'}/>Dashboard
              </h2>
              <div className='border ' />
                <p className='sm:text-xs md:text-xs lg:text-base'>
                  Welcome, user
                </p>
              </div>
            </div>
            
            <div>
              <div className='flex justify-end items-center font-mono text-black -mb-5 mr-2'>
                  <FilterTime />
              </div>
            </div>

            <div className='mt-2 '>
                <Box/>
            </div>  

            <div className='p-1'>
              <GabCard/>
            </div>        

            <div className='ml-2 mt-3 '>
              <h6>
                Penjualan
              </h6>
                <div className='border ml-20 -mt-4 mb-2'/>

              <div>
                <DataPenjual/>
              </div>

            </div>

            <div className='ml-2 mt-3'>
              <h6>
                Piutang
              </h6>
                <div className='border ml-20 -mt-4 mb-2'/>

              <div>
                <DataPiutang/>
              </div>
            </div>

        {/* Line Border */}
        <div className='border mt-2 mb-2'/>

      </div>
      
    </>
    
  )
}

export default Sales;