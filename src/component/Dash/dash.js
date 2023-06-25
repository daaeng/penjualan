import React from 'react'
import Tabled from '../Table/tabled';
// import CobaChart from '../chart/coba.js';
import Pembelian from '../chart/pembelian.js';
import PelangganChart from '../chart/ChartPie';
import Labeldt from '../backpage/label.js';
// import Cardex from '../backpage/cardex.js';
// import Pembayaran from '../chart/pembayaran';
// import DataGrafGAB from '../chart/dataGrafGAB';
// import {MdDownload, MdPrint} from 'react-icons/md'

function Dash() {

  const title = () => {
    return ("Grafik Transaksi")
  }
  
  return (
    
    <>
      <div className='flex p-1'>
        <div className='w-full p-1'>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 rounded-md w-full'>
            
            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2'>
              <Tabled/> 
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-2'>
              <div className='mb-1'>
                  <Labeldt title = {title}/>
              </div>

              <Pembelian/>
              
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-2'>
              <PelangganChart/>
            </div>
            
          </div>

        </div>
        
      </div>      
    </>
    
    )
  }
  
  export default Dash;