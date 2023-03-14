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
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function Data_grafGAB(){

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

  

    return(
        <>

            <div style={{
                width: 1200
                
                }}>

                <Line options={options} data={data} />

            </div>
            
        </>
    )

}

export default Data_grafGAB

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
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
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Pembayaran',
      data: [60, 30, 10, 50, 90, 75, 120, 60, 80, 90],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ]
}

