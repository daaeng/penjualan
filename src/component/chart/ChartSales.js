import React, { useEffect, useState } from "react";
import axios from "../config/api/axios";
import {
    
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import Loadeer from "../backpage/Loader/Loadeer";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const baseURL = '/API/Dashboard/GetSalesByRangeDate?withCompare=true&comparison=lm&withDetail=true'
  
  const ChartSales = () => {
      
    const [chart, setChart] = useState(null)

    useEffect(() => {

        const token = sessionStorage.getItem('userData')
        if(token){
            const axiosConfig = {
                headers : {
                    Accept : "application/json",
                    Authorization : `Bearer ${token}`
                }
            }
            axios.get(baseURL, axiosConfig).then((response) => {
                // console.log(response.data);
                if(response.data.data.length > 0) {
                    setChart({
                        labels : response.data.data.map((indiData) => indiData.tgl),
                        datasets : [
                            {
                                label : 'Amount Compare',
                                fill: true,
                                data : response.data.data.map((indiData) => indiData.amCompare),
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            },
                            {
                                label : 'Amount',
                                fill: true,
                                data : response.data.data.map((indiData) => indiData.am),
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            }
                        ]
                    })
                }
                else{
                    console.log('Tidak Ada Data');
                }
            })
            .catch((errors) => {
                console.log(errors.message);
            })
        }
    },[])

    return(
        <>
            <div className="bg-white rounded w-full p-1">
                <div className="flex-wrap">
                    {chart !== null? (
                        <Line options={options} data={chart}/>
                    ):(
                        <div className="flex lg:text-xl md:text-lg sm:text-base justify-center lg:p-72 md:p-56 sm:p-24">
                            <Loadeer/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default ChartSales

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
        // text: 'CEK CEK CEK NAMA',
      },
  },
};