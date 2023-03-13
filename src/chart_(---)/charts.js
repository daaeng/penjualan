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

export default function charts() {

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
            <div style={{
                width: 800
                }}>

                <Bar options={options} data={data} />

                <label>Dari tanggal : </label>
                <input type="date" ></input>
                &nbsp;
                <label>Sampai tanggal : </label>
                <input type="date" ></input>
                &nbsp;
                <button>Kirim</button>
            </div>
        </div>
        
    </>
  )
}

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