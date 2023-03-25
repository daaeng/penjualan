import React from 'react'
import Box from './box';
import Penjualan from '../chart/penjualan.js';
import Pembayaran from '../chart/pembayaran';
import Tabled from '../table/tabled';
import DateTimeR from '../dateRange/dateTimeR';

// import DatePicker from 'react-date-picker';
// import DataGrafGAB from '../chart/dataGrafGAB';
// import { Table } from 'react-bootstrap';
// import Search from './search';
// import {useNavigate} from 'react-router-dom'

function Dash() {

  // const navigate = useNavigate()
  
  // const [value, onChange] = useState(new Date());

  return (

    <>
      <div className={`ml-48 mb-4`}>

        <div className={`px-8 flex-1 pt-3`}>

          <h2>Dashboard</h2>
          <Box/>

          <div className='px-1 flex-1 pt-2 pb-2'>
          </div>
            <div className=' flex flex-row text-gray-500 justify-end'>
              {/* <DatePicker onChange={onChange} value={value}/> */}
              <DateTimeR/>
            </div>

        </div>
        
        <div className='grid lg:grid-cols-3 gap-4 p-4 relative '>
            <div className='sm:w-auto md:w-1/2 lg:w-full lg:row-span-2 flex justify-between w-full  p-4 rounded-lg bg-gray-100 shadow'>

              <Tabled/>

            </div>

            <div className='sm:w-auto md:w-1/2 lg:w-full lg:col-span-2  flex justify-between w-full  p-4 rounded-lg bg-gray-100 shadow'>

              <Penjualan/>
              
              {/* <div className='justify-end mb-3'>
                <button
                  onClick = {() => navigate ('/dpen')} 
                  className='rounded-md w-16 items-center bg-gray-300'>
                    Detail
                </button>
                
              </div> */}

              
            </div>

            <div className='sm:w-auto md:w-1/2 lg:w-full lg:col-span-2  flex justify-between w-full  p-4 rounded-lg bg-gray-100 shadow'>

              <Pembayaran/>
              
            </div> 
            
        </div>
              {/* <DataGrafGAB/> */}

          <h3 className='ml-7'>Tes tes</h3>

                  
      </div>
      
    </>
    
  )
}

export default Dash;