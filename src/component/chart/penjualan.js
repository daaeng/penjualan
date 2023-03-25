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


function Penjualan(){

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
            <div style={{width: 750}}>

                {/* <Detail_pen data={this.this.state.data} /> */}
                <Bar options={options} data={data} />

            </div>
        </>
    )

}

export default Penjualan
const options = {
    responsive: true,
    // maintainaspectratio:false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Bar Chart Penjualan',
      },
    },
  };
  
  const labels = ['01/01/2023', '01/02/2023', '01/03/2023', '01/04/2023', '01/05/2023', '01/06/2023', '01/07/2023', '01/08/2023', '01/09/2023', '01/10/2023'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Penjualan',
        data: [60, 30, 10, 50, 90, 75, 120, 60, 80, 90],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ]
  }