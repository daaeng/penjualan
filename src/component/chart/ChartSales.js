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
import FilTime from "../backpage/FilTime";

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

  const baseURL = '/API/Dashboard/getSalesRetur?'

  const ChartSales = () => {
      
    const [chart, setChart] = useState(null)

    const [Start, setStart] = useState([])
    const [Last, setLast] = useState([])
    const [Compare, setComp] = useState([])
    const UbahTgl = (startDate, endDate, value) => {
        console.log('tgl awal', startDate);
        console.log('tgl akhir', endDate);
        console.log('Compare', value);
        setStart(startDate)
        setLast(endDate)
        setComp(value)
    }

    // const [drDown, setDrDown] = useState([])
    // const options =(value) => {
    //     console.log(value);
    //     // setDrDown(value)
    // }

    useEffect(() => {

        if(UbahTgl){
            axios.get(baseURL,{
                params : {
                    startDate : Start,
                    endDate : Last, 
                    comparison : Compare
                }
            }).then((response) => {
                // console.log(response.data);
                if(response.data.data.length > 0) {
                    // if(comparison = null){

                    // } else{

                    // }
                    setChart({
                        labels : response.data.data.map((indiData) => indiData.tgl),
                        datasets : [
                            // {
                            //     label : 'amNett',
                            //     fill: true,
                            //     data : response.data.data.map((indiData) => indiData.amNett),
                            //     backgroundColor: 'rgba(250, 0, 0, 0.3)',
                            // },

                            {
                                label : 'amSI',
                                fill: true,
                                data : response.data.data.map((indiData) => indiData.amSI),
                                backgroundColor: 'rgba(49, 217, 234, 0.5)',
                            },
                           
                            //Data Compare
                            {
                                label : 'amSICompare',
                                fill: true,
                                data : response.data.data.map((indiData) => indiData.amSICompare),
                                backgroundColor: 'rgba(45, 167, 25, 0.5)',
                            },
                            //~~~~~~~~~~~~~~~~~~~~~
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
    },[Start, Last, Compare])

    return(
        <>
            <div className="bg-white rounded w-full p-1">
                <div className='flex justify-end items-center font-mono text-black -mt-2 '>
                    <FilTime  onChange={UbahTgl}/>
                </div>

                <div className="flex-wrap items-center -mt-5">
                    {chart !== null? (
                        <>
                            <Line options={options} data={chart}/>
                        </>
                    ):(
                        <div className="flex lg:text-xl md:text-lg sm:text-base justify-center lg:p-72 md:p-56 sm:p-24">
                            <Loadeer/>
                            {console.log('Loading')}
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