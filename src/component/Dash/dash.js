import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import Box from './box';
import Search from './search';
import {useNavigate} from 'react-router-dom'
// import Penjualan from '../chart/penjualan.js';
// import Pembayaran from '../chart/pembayaran';
// import DataGrafGAB from '../chart/dataGrafGAB';

function Dash() {

  const navigate = useNavigate()
  
  const [value, onChange] = useState(new Date());

  return (

    <>

      
      <div className={`md:-w-32 lg:-w-48 ml-48 px-8 flex-1 pt-3`}>

        <Search/>
        <Box/>

        <div className='px-1 flex-1 pt-2 pb-2'>
        </div>
          <div className=' flex flex-row text-gray-500 justify-end'>
            <DatePicker onChange={onChange} value={value}/>
          </div>

      </div>
      
      <div className='grid lg:grid-cols-4 gap-4 p-4 relative ml-48'>

          <div className='lg:col-span-2 col-span-1 flex justify-between w-full  p-4 rounded-lg bg-gray-100 shadow'>

            {/* <Penjualan/> */}

            <div className='flex justify-end mb-3'>
              <button
                onClick = {() => navigate ('/dpen')} 
                className='rounded-md w-16 items-center bg-gray-300'>
                  Detail
              </button>
              
            </div>
            
          </div>

          <div className='lg:col-span-2 col-span-1 flex justify-between w-full  p-4 rounded-lg bg-gray-100 shadow'>

            {/* <Pembayaran/> */}
            

            <div className='flex justify-end mb-3'>
              <button className='rounded-md w-16 items-center bg-gray-300'>
                Detail
              </button>
            </div>
            
          </div>
        
          
      </div>

      <div className='flex flex-row pt-2 ml-48 rounded-xl mb-5 bg-gray-300'>
          
        <div className='rounded-xl bg-gray-100 px-3 pt-3 mt-2 mb-3 ml-14'>
          
          {/* <DataGrafGAB/> */}
      
        </div>
      </div>
        
    </>
    
  )
}

export default Dash;