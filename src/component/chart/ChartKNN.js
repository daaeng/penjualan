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

function ChartKNN(){

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

    return(
        <>
          
            <div className='bg-white rounded w-full'>
              
                {/* <Detail_pen data={this.this.state.data} /> */}
                <Bar options={options} data={data} />

            </div>
        </>
    )
}

export default ChartKNN

const options = {

    indexAxis: 'y',
    elements: {
        bar: {
        borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
        position: 'right',
        },
        title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
        },
    },
  
//   responsive: true,
//   maintainAspectRatio: true,
//   aspectRatio: 2,
  
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       title: {
//         display: true,
//         text: 'Line Chart Transaksi',
//       },
//   },
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
    // {
    //   fill: true,
    //   label: 'Pembayaran',
    //   data: [50, 20, 30, 20, 60, 80, 90, 90, 75, 120],
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      
    // },


  ]
}

// Pengambilan data tertentu
// mengambil data am , dan am compare

// "data": [
//     {
//       "tgl": "2023-05-20T00:00:00",
//       "am": 1735963003,
//       "tglCompare": "2023-04-20T00:00:00",
//       "amCompare": 2063135021
//     },
//     {
//       "tgl": "2023-05-21T00:00:00",
//       "am": 1435400666,
//       "tglCompare": "2023-04-21T00:00:00",
//       "amCompare": 878816628
//     },
//     {
//       "tgl": "2023-05-22T00:00:00",
//       "am": 276468000,
//       "tglCompare": "2023-04-22T00:00:00",
//       "amCompare": 0
//     },
//     {
//       "tgl": "2023-05-23T00:00:00",
//       "am": 0,
//       "tglCompare": "2023-04-23T00:00:00",
//       "amCompare": 0
//     },
//     {
//       "tgl": "2023-05-24T00:00:00",
//       "am": 0,
//       "tglCompare": "2023-04-24T00:00:00",
//       "amCompare": 1930992200
//     },
//     {
//       "tgl": "2023-05-25T00:00:00",
//       "am": 0,
//       "tglCompare": "2023-04-25T00:00:00",
//       "amCompare": 2270982870
//     },
//     {
//       "tgl": "2023-05-26T00:00:00",
//       "am": 0,
//       "tglCompare": "2023-04-26T00:00:00",
//       "amCompare": 1601993761
//     }
//   ],