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

function Pembayaran(){

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
            <div style={{
                width: 650
                
                }}>

                <Bar options={options} data={data} />

            </div>
        </>
    )

}

export default Pembayaran
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
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
      
    ]
  }




