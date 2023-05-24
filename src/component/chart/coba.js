//Data grafik
import React, {useRef} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar, getDatasetAtEvent, getElementAtEvent,} from 'react-chartjs-2';

function CobaChart(){

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Bar Chart Pembayaran',
        },
      },
    };
      
    const labels = ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01'];
      
    const data = {
      labels,
      datasets: [
        {
          label: 'Pembayaran',
          data: [25, 38, 3, 53, 46, 10, 2, 10, 60, 17],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
          
      ]
    }

    const chartRef = useRef();
    const onClick = (event) => {
      const {current:chart} =chartRef;

      if (!chart) {
        return;
      }
      
      console.log(getElementAtEvent(chartRef.current, event));
      console.log(getDatasetAtEvent(chartRef.current, event));
    }

    return(
        <>            
            <div className='bg-white rounded w-full'>

                <Bar 
                  options={options} 
                  onClick={onClick} 
                  data={data} 
                  ref={chartRef}
                />

            </div>
        </>
    )
}

export default CobaChart

