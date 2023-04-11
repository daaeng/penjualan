import React from 'react'
import Penjualan from '../chart/penjualan.js';
import Tabled from '../Table/tabled';
// import Pembayaran from '../chart/pembayaran';
// import DataGrafGAB from '../chart/dataGrafGAB';
import PelangganChart from '../chart/pelanggan';
// import {MdDownload, MdPrint} from 'react-icons/md'

function Dash() {
  
  return (
    
    <>
      <div className='flex p-2'>
        <div className='w-full p-1  rounded-lg'>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 rounded-md w-full'>
            
            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2'>
              <Penjualan/> 
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-1'>
              <Tabled/>
            </div>

            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-1'>
              <PelangganChart/>
            </div>
            
          </div>

        </div>
      </div>
    </>
    
    )
  }
  
  export default Dash;
  
    // const navigate = useNavigate()
    
    // const [value, onChange] = useState(new Date());

// {/* <h3 className='ml-7 bg-slate-50 mt-2 -mb-4'> Data Grafik</h3>
        
//         <div className='grid lg:grid-cols-4 gap-4 p-4'>
          
//             <div className='overflow-scroll lg:col-span-2 flex justify-between 
//                             w-full  p-4 rounded-lg bg-blue-100 '>

//               <Tabled/>

//             </div>          

//             <div className='lg:col-span-2  flex justify-between w-full  p-4 rounded-lg bg-blue-100 '>
            
//               <Penjualan/>            
             
//             </div>

//             <div className='lg:col-span-2 flex justify-between w-full  p-4 rounded-lg bg-blue-100 '>

//               <Pembayaran/>
              
//             </div> 

            
//         </div>

//         <h3 className='ml-7 bg-slate-50'> tes tes</h3>
              
//         <div className='grid lg:grid-cols-3 gap-4 p-4 bg-black w-auto'>
          
//           <div className='lg:row-span-2 overflow-scroll  lg:col-span-2 flex justify-between w-full  p-4 rounded-lg bg-blue-600 '>

//             <DataGrafGAB/>

//           </div>         

//           <div className='lg:row-span-2  flex justify-between w-full  p-4 rounded-lg bg-blue-100 '>

//             <PelangganChart/>
            
//           </div> 
          
//         </div> */}