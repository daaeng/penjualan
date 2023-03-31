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
  import { Bar} from 'react-chartjs-2';

function Pembayaran(){

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // const chartRef = useRef();
    // const onClick = (event) => {
    //   console.log(getElementsAtEvent(chartRef.current, event));
    //   console.log(getDatasetAtEvent(chartRef.current, event));
    // }

    return(
        <>
            
            <div  style={{ position: "relative", height: "auto", width: "80vw" }} className='bg-white rounded-lg'>

                <Bar 
                  options={options} 
                  // onClick={onClick} 
                  data={data} 
                  // ref={chartRef}
                />

            </div>
        </>
    )

}

export default Pembayaran

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
        text: 'Bar Chart Pembayaran',
      },
    },
  };
  
const labels = ['01/01/2023', '01/02/2023', '01/03/2023', '01/04/2023', '01/05/2023', '01/06/2023', '01/07/2023', '01/08/2023', '01/09/2023', '01/10/2023'];
  
const data = {
  labels,
  datasets: [
    {
      label: 'Pembayaran',
      data: [50, 20, 30, 20, 60, 80, 90, 90, 75, 120],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
      
  ]
}