import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import Box from './box';
import Search from './search';
// import Penjualan from '../chart/penjualan.js';
// import Pembayaran from '../chart/pembayaran';
import {useNavigate} from 'react-router-dom'
// import DataGrafGAB from '../chart/dataGrafGAB';

function Dash() {

  const navigate = useNavigate()
  
  const [value, onChange] = useState(new Date());

  return (

    <>

      
      <div className='px-14 flex-1 pt-3 ml-20 mr-3 '>

        <Search/>
        <Box/>

        <div className='px-1 flex-1 pt-2 pb-2'>
        </div>
          <div className=' flex flex-row text-gray-500 justify-end'>
            <DatePicker onChange={onChange} value={value}/>
          </div>

      </div>
      
      <div className='grid lg:grid-cols-4 gap-4 p-4 relative ml-28 mr-11'>

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

      <div className='flex flex-row pt-2 ml-32 mr-14 rounded-xl mb-5 bg-gray-100'>
          
        <div className='rounded-xl bg-gray-100 px-3 pt-3 mt-2 mb-3 ml-14'>
          
          {/* <DataGrafGAB/> */}

        </div>
      </div>

      
      

        
    </>
    
  )
}

export default Dash;