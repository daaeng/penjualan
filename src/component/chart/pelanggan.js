import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function PelangganChart(){

    ChartJS.register(ArcElement, Tooltip, Legend);

    return(
        <>
            <div className='bg-white rounded w-full'>
                <Pie options={options} data={data} />
                <Pie options={options2} data={data2} />

            </div>
        </>
    ) 

}

export default PelangganChart

const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
  
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Chart Line Penjualan',
      },
    },
};
  
const labels = ['01/01/2023', '01/02/2023', '01/03/2023', '01/04/2023', '01/05/2023', '01/06/2023', '01/07/2023', '01/08/2023', '01/09/2023', '01/10/2023'];

const data = {
labels,
datasets: [
    {
    label: 'Penjualan',
    data: [50, 20, 30, 20, 60, 80, 90, 90, 75, 120],

    backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 172, 102, 0.2)',
        'rgba(193, 110, 21, 0.2)',
        'rgba(255, 59, 69, 0.2)',            

    ],
    borderColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 172, 102, 0.2)',
        'rgba(193, 110, 21, 0.2)',
        'rgba(255, 59, 69, 0.2)', 
        ],
        borderWidth: 1,
    }
]
}

const options2 = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
  
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Chart Line Pembayaran',
      },
    },
};

const data2 = {
labels,
datasets: [
    {
    label: 'Pembayaran',
    data: [60, 30, 10, 50, 90, 75, 120, 60, 80, 90],

    backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 172, 102, 0.2)',
        'rgba(193, 110, 21, 0.2)',
        'rgba(255, 59, 69, 0.2)',            

    ],
    borderColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 172, 102, 0.2)',
        'rgba(153, 102, 215, 0.2)',
        'rgba(255, 59, 69, 0.2)', 
        ],
        borderWidth: 1,
    }
]
}
