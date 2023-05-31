//Data grafik
import React from 'react';
import {
    
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

function Pembelian(){

  

  return(
        <>
          
            <div className='bg-white rounded w-full'>
              
                {/* <Detail_pen data={this.this.state.data} /> */}
                <Line options={options} data={data} />

            </div>
        </>
    )
}

export default Pembelian

const options = {
  
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Grafik Sales',
      },
  },
};
  
const labels = ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07', '01/08', '01/09', '01/10'];
  
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Pembelian',
      data: [60, 30, 10, 50, 90, 75, 120, 60, 80, 90],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      
    },
    {
      fill: true,
      label: 'Pembayaran',
      data: [50, 20, 30, 20, 60, 80, 90, 90, 75, 120],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      
    },
  ]
}