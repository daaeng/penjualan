import React from 'react'
import Penjualan from '../chart/penjualan.js';
import Pembayaran from '../chart/pembayaran';
import Tabled from '../Table/tabled';
import DataGrafGAB from '../chart/dataGrafGAB';
import PelangganChart from '../chart/pelanggan';
// import {MdDownload, MdPrint} from 'react-icons/md'

function Dash() {

  // const navigate = useNavigate()
  
  // const [value, onChange] = useState(new Date());
  
  return (

    <>
              
        <h3 className='ml-7 bg-slate-50 mt-2 -mb-4'> Data Grafik</h3>
        
        <div className='grid lg:grid-cols-4 gap-4 p-4  '>
          
            <div className='lg:row-span-2 overflow-scroll max-h-270 lg:col-span-2 flex justify-between 
                            w-full  p-4 rounded-lg bg-blue-100 '>

              <Tabled/>

            </div>          

            <div className='lg:col-span-2  flex justify-between w-full  p-4 rounded-lg bg-blue-100 '>
            
              <Penjualan/>            
             
            </div>

            <div className='lg:col-span-2 flex justify-between w-full  p-4 rounded-lg bg-blue-100 '>

              <Pembayaran/>
              
            </div> 

            
        </div>

        <h3 className='ml-7 bg-slate-50'> tes tes</h3>
              
        {/* <div className='grid lg:grid-cols-3 gap-4 p-4 bg-black w-auto'>
          
          <div className='lg:row-span-2 overflow-scroll  lg:col-span-2 flex justify-between w-full  p-4 rounded-lg bg-blue-600 '>

            <DataGrafGAB/>

          </div>         

          <div className='lg:row-span-2  flex justify-between w-full  p-4 rounded-lg bg-blue-100 '>

            <PelangganChart/>
            
          </div> 
          
        </div> */}
                  
      {/* </div> */}
      
    </>
    
  )
}

export default Dash;