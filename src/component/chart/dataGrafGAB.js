import React, { useEffect, useState } from 'react';
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
import axios from '../config/api/axios';
import Loadeer from '../backpage/Loader/Loadeer';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const baseURL = '/rptReact/Dashboard/getSalesRetur?'

function DataGrafGAB(){

  const [chart, setChart] = useState(null)

    useEffect(() => {

      const token = sessionStorage.getItem('userData')
      if(token){
          // const axiosConfig = {
          //     headers : {
          //         Accept : "application/json",
          //         Authorization : `Bearer ${token}`
          //     }
          // }
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
                            label : 'amNett',
                            data : response.data.data.map((indiData) => indiData.amNett),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 1)',
                        },
                        {
                            label : 'amSI',
                            data : response.data.data.map((indiData) => indiData.amSI),
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 1)',
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
        <div className='bg-white rounded w-full'>

            {/* <Line options={options} data={data} /> */}

            {chart !== null? (
                <Line options={options} data={chart}/>
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

export default DataGrafGAB

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
      text: 'Chart Line Penjualan dan Pembayaran',
    },
  },
};
