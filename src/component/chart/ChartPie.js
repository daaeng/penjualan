import React, { useEffect, useState } from "react";
import axios from "../config/api/axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Loadeer from "../backpage/Loader/Loadeer";
ChartJS.register(ArcElement, Tooltip, Legend);

const baseURL = '/rptReact/Dashboard/getSalesRetur?'

function ChartPie(){

  const [chart, setChart] = useState(null)

  useEffect(() => {

      const token = sessionStorage.getItem('userData')
      if(token){
          axios.get(baseURL,{
              params : {
                  startDate : '',
                  endDate : ''
              }
          }).then((response) => {
              // console.log(response.data);
              if(response.data.data.length > 0) {
                  setChart({
                      labels : response.data.data.map((indiData) => indiData.tgl),
                      datasets : [
                          {
                              label : 'amSI',
                              data : response.data.data.map((indiData) => indiData.amSI),
                              backgroundColor: [
                                'rgba(255, 10, 55)',
                                'rgba(54, 80, 235)',
                                'rgba(255, 206, 86)',
                                'rgba(70, 192, 10)',
                                'rgba(153, 102, 255)',
                                'rgba(255, 159, 64)',
                                'rgba(255, 206, 86)',
                                'rgba(127, 255, 212)',
                                'rgba(135, 206, 250)',
                                'rgba(255, 182, 193)',            
                        
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
                          },
                      ]
                  })
              }
              else{
                  console.log('Tidak Ada Data');
              }
          })
          .catch((errors) => {
              console.log(errors.message)
              console.log('Error Guys..!');
          })
      }
  },[])

  return(
      <>
          <div className='bg-white rounded w-full p-2'>
              {/* <Pie options={options} data={data} /> */}
              {/* <Pie options={options2} data={data2} /> */}
              {chart !== null? (
                  <Pie options={options} data={chart}/>
              ):(
                  <div className="flex lg:text-xl md:text-lg sm:text-base justify-center lg:p-56 md:p-44 sm:p-24">
                      <Loadeer/>
                      {/* {console.log('Loading')} */}
                  </div>
              )}
          </div>
      </>
  ) 

}

export default ChartPie

const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
  
    plugins: {
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: 'Chart Line Penjualan amSI',
      },
    },
};
  
// const labels = ['01/01/2023', '01/02/2023', '01/03/2023', '01/04/2023', '01/05/2023', '01/06/2023', '01/07/2023', '01/08/2023', '01/09/2023', '01/10/2023'];

// const data = {
// labels,
// datasets: [
//     {
//     label: 'Penjualan',
//     data: [50, 20, 30, 20, 60, 80, 90, 90, 75, 120],

//     backgroundColor: [
//         'rgba(255, 10, 55)',
//         'rgba(54, 80, 235)',
//         'rgba(255, 206, 86)',
//         'rgba(70, 192, 10)',
//         'rgba(153, 102, 255)',
//         'rgba(255, 159, 64)',
//         'rgba(255, 206, 86)',
//         'rgba(127, 255, 212)',
//         'rgba(135, 206, 250)',
//         'rgba(255, 182, 193)',            

//     ],
//     borderColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 172, 102, 0.2)',
//         'rgba(193, 110, 21, 0.2)',
//         'rgba(255, 59, 69, 0.2)', 
//         ],
//         borderWidth: 1,
//     }
//   ]
// }

// const options2 = {
//     responsive: true,
//     maintainAspectRatio: true,
//     aspectRatio: 2,
  
//     plugins: {
//       legend: {
//         position: 'bottom'
//       },
//       title: {
//         display: true,
//         text: 'Chart Line Pembayaran',
//       },
//     },
// };

// const data2 = {
// labels,
// datasets: [
//     {
//     label: 'Pembayaran',
//     data: [60, 30, 10, 50, 90, 75, 120, 60, 80, 90],

//     backgroundColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 172, 102, 0.2)',
//         'rgba(193, 110, 21, 0.2)',
//         'rgba(255, 59, 69, 0.2)',            

//     ],
//     borderColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 172, 102, 0.2)',
//         'rgba(153, 102, 215, 0.2)',
//         'rgba(255, 59, 69, 0.2)', 
//         ],
//         borderWidth: 1,
//     }
//   ]
// }
