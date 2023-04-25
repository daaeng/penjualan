//Data grafik
import React from 'react';
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
import Labeldt from '../backpage/label';

function Pembelian(){

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const title = () => {
      return ("Grafik Transaksi")
    }

    return(
        <>
          <div className='mb-1'>
            <Labeldt title = {title}/>
          </div>
          
            <div className='bg-white rounded w-full'>
              
                {/* <Detail_pen data={this.this.state.data} /> */}
                <Bar options={options} data={data} />

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
        text: 'Bar Chart Transaksi',
      },
  },
};
  
  const labels = ['01/01/2023', '01/02/2023', '01/03/2023', '01/04/2023', '01/05/2023', '01/06/2023', '01/07/2023', '01/08/2023', '01/09/2023', '01/10/2023'];
  
export const data = {
  labels,
  datasets: [
    {
      label: 'Pembelian',
      data: [60, 30, 10, 50, 90, 75, 120, 60, 80, 90],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Pembayaran',
      data: [50, 20, 30, 20, 60, 80, 90, 90, 75, 120],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ]
}