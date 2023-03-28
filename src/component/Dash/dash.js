import React from 'react'
import Box from './box';
import Penjualan from '../chart/penjualan.js';
import Pembayaran from '../chart/pembayaran';
import Tabled from '../Table/tabled';
import DateTimeR from '../dateRange/dateTimeR';
import DataGrafGAB from '../chart/dataGrafGAB';
// import {MdDownload, MdPrint} from 'react-icons/md'
// import DatePicker from 'react-date-picker';
// import { Table } from 'react-bootstrap';
// import Search from './search';
// import {useNavigate} from 'react-router-dom'

function Dash() {

  // const navigate = useNavigate()
  
  // const [value, onChange] = useState(new Date());

  return (

    <>
      <div className={`ml-48 mb-4`}>

        <div className={`px-8 flex-1 pt-3 bg-`}>

          <h2 className='font-mono text-white'>Dashboard</h2>
          <Box/>

          <div className='px-1 flex-1 pt-2 pb-2'>
          </div>
            <div className=' flex flex-row text-gray-500 justify-end'>
              {/* <DatePicker onChange={onChange} value={value}/> */}
              <DateTimeR/>
            </div>

        </div>
        
        <div className='grid lg:grid-cols-4 gap-4 p-4 relative '>
          
            <div className='md:w-4/5 lg:w-full lg:row-span-3 overflow-scroll max-h-512 lg:col-span-2 flex justify-between w-full  p-4 rounded-lg bg-gray-200 '>

              <Tabled/>

            </div>

            <div className='items-center sm:w-auto md:w-1/2 lg:w-full lg:col-span-1  flex justify-between w-full  p-4 rounded-lg bg-gray-200 '>

              <h5>
                Data Penjualan & Pembayaran
                
              </h5>
              
            </div> 

            <div className='items-center sm:w-auto md:w-1/2 lg:w-full lg:col-span-1  flex flex-row justify-between w-full  p-4 rounded-lg bg-gray-200 '>

              <h6>
                <div className=''>
                  Tanggal 3-5-2023 ~ 10-5-2023
                </div>
              </h6>
              
            </div>
            

            <div className='md:w-4/5 lg:w-full lg:col-span-2  flex justify-between w-full  p-4 rounded-lg bg-gray-200 '>
            
              <Penjualan/>            
            
              
              {/* <div className='flex-row justify-end mb-3'>
                <button
                  onClick = {() => navigate ('/dpen')} 
                  className='rounded-md w-16 flex-row items-center bg-gray-300'>
                    Detail
                </button>

                <div className='flex flex-1 -mt-4 -mr-4 space-x-2 bg-black text-gray-200 items-center px-1 py-1 rounded'>
                  <MdDownload size={'20'} className='cursor-pointer'/>
                  <MdPrint size={'20'} className='cursor-pointer'/>
                </div>
                
              </div> */}

              
            </div>

            {/* <div className='sm:w-auto md:w-1/2 lg:w-full lg:col-span-2  flex justify-between w-full  p-4 rounded-lg bg-gray-200 '>

              <DataGrafGAB/>
              
            </div>  */}

            <div className='md:w-4/5 lg:w-full lg:col-span-2  flex justify-between w-full  p-4 rounded-lg bg-gray-200 '>

              <Pembayaran/>
              
            </div> 
            
        </div>

          <h3 className='ml-7'>Tes tes</h3>
              


        
        <div className='grid lg:grid-cols-3 gap-4 p-4 relative '>
          
          <div className='md:w-4/5 lg:w-full lg:row-span-2 overflow-scroll  lg:col-span-2 flex justify-between w-full  p-4 rounded-lg bg-gray-200 '>

            <DataGrafGAB/>

          </div>         

          <div className='md:w-4/5 lg:w-full lg:row-span-2  flex justify-between w-full  p-4 rounded-lg bg-gray-200 '>

              <Pembayaran/>
              
            </div> 
          
        </div>
                  
      </div>
      
    </>
    
  )
}

export default Dash;