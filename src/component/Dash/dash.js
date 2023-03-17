import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import Box from './box';
import Search from './search';
import Penjualan from '../chart/penjualan.js';
import Pembayaran from '../chart/pembayaran';
import {useNavigate} from 'react-router-dom'
import DataGrafGAB from '../chart/dataGrafGAB';

function Dash() {

  const navigate = useNavigate()
  
  const [value, onChange] = useState(new Date());

  return (

    <>

      
      <div className='px-14 flex-1 pt-14 ml-5 mr-8 mt-3'>

        <Search/>
        
        <div className='px-10 flex-1 pt-10 ml-5'>
          
          <Box/>

          <div className='px-1 flex-1 pt-2'>
            <div className='mr-2 pt-2 px-3 flex flex-row space-x-5 text-gray-500 justify-end'>
            <div className='mr-3 ml-3 mt-3  '>
              
              <DatePicker onChange={onChange} value={value}/>

            </div>
            </div>
          </div>

        </div>

      </div>
      
      <div className='flex flex-row space-x-2 ml-10 mr-10 pt-2 relative'>

          <div className='px-3 pt-3 ml-2 mb-5 rounded-xl bg-gray-100'>

            <Penjualan/>

            <div className='flex justify-end mb-3'>
              <button
                onClick = {() => navigate ('/d_pen')} 
                className='rounded-md w-16 items-center bg-gray-300'>
                  Detail
              </button>
              
            </div>
            
          </div>

          <div className='px-3 pt-3 ml-2 mb-5 rounded-xl bg-gray-100'>

            <Pembayaran/>

            <div className='flex justify-end mb-3'>
              <button className='rounded-md w-16 items-center bg-gray-300'>
                Detail
              </button>
            </div>
            
          </div>
        
          
      </div>

      <div className='flex flex-row pt-2 ml-12 mr-14 rounded-xl mb-5 bg-gray-100'>
          
        <div className='rounded-xl bg-gray-100 px-3 pt-3 mt-2 mb-3 ml-14'>
                    
          <DataGrafGAB/>

        </div>
      </div>
      

        
    </>
    
  )
}

export default Dash;