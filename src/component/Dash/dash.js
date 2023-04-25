import React from 'react'
import Tabled from '../Table/tabled';
// import Pembayaran from '../chart/pembayaran';
// import DataGrafGAB from '../chart/dataGrafGAB';
import PelangganChart from '../chart/pelanggan';
// import Cardex from '../backpage/cardex.js';
import CobaChart from '../chart/coba.js';
import Pembelian from '../chart/pembelian.js';
// import Labeldt from '../backpage/label.js';
// import {MdDownload, MdPrint} from 'react-icons/md'

function Dash() {
  
  return (
    
    <>
      <div className='flex p-1'>
        <div className='w-full p-1'>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 rounded-md w-full'>
            
            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2'>
              <Tabled/> 
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-2'>
              <Pembelian/>
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-2'>
              <PelangganChart/>
            </div>
            
          </div>

        </div>
        
      </div>

        <div className='max-w-7xl h-auto mb-2'>
          <CobaChart/>
        </div>
      
    </>
    
    )
  }
  
  export default Dash;