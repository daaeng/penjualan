
import React from 'react'
import { BiSearch } from 'react-icons/bi';
// import { Card } from 'react-bootstrap';
import { BsShop } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function Dashboard() {
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (

    <>

      
      <div className='px-14 flex-1 pt-14 ml-5'>

        <div className='border border-gray-200  rounded w-full flex py-3 px-3 items-center'>
          <BiSearch/>
          <input type={'text'} className = 'flex-1' placeholder = 'Search'/>
        </div>
        
        <div className='px-10 flex-1 pt-10 ml-5'>
          
          <div className='flex flex-row space-x-8 '>
            <div className=' rounded-xl bg-green-500 bg-opacity-10 p-5 w-40 text-green-600'>
              <BsShop size={25}/>
              <span className='text-sm'>
              Penjualan
              </span>
            </div>
          
            <div className=' rounded-xl bg-yellow-500 bg-opacity-10 p-5 w-40 text-green-600'>
              <MdPayments size={25}/>
              <span className='text-sm'>
              Pembayaran
              </span>
            </div>
            
          </div>

          <div className='px-8 flex-1 pt-2 ml-5'>
            <div className='mr-2 pt-2 px-3 flex flex-row space-x-5 justify-end'>
              <label>Dari</label>
              <input type={'date'}></input> 
            </div>
          </div>

        </div>

      </div>
      
      <div>
          <div className='px-14 flex-1 pt-14 ml-5'>
            <div style={{
                width: 800
                }}>

                <Bar options={options} data={data} />

            </div>
          </div>
      </div>

        
    </>
    
  )
}


//Data grafik
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Tampilan Bar Chart',
    },
  },
};

const labels = ['01/01/2023', '01/02/2023', '01/03/2023', '01/04/2023', '01/05/2023', '01/06/2023', '01/07/2023', '01/08/2023', '01/09/2023', '01/10/2023'];

const data = {
labels,
datasets: [
  {
    label: 'Dataset 1',
    data: [50, 20, 30, 20, 60, 80, 90, 90, 75, 120],
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Dataset 2',
    data: [60, 30, 10, 50, 90, 75, 120, 60, 80, 90],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
],
};

export default Dashboard;