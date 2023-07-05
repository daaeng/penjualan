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
//   import {
//     Chart,
//     getDatasetAtEvent,
//     getElementAtEvent,
//     getElementsAtEvent,
//   } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import Loadeer from "../backpage/Loader/Loadeer";
import FilTime from "../backpage/FilTime";
// import { useNavigate } from "react-router-dom";

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

  const baseURL = '/rptReact/Dashboard/getSalesRetur?'

const ChartSales = () => {

    // const navigate = useNavigate()

      
    const [chart, setChart] = useState(null)
    const [Start, setStart] = useState([])
    const [Last, setLast] = useState([])
    const [Compare, setComp] = useState([])
    const [Branch, setBranch] = useState([])
    
    const UbahTgl = (startDate, endDate, drDown,brDown) => {
        let dataCom = drDown.value
        let dataBr = brDown.value
        console.log('tgl awal', startDate);
        console.log('tgl akhir', endDate);
        console.log('Compare', dataCom);
        console.log('Branch', dataBr);
        setStart(startDate)
        setLast(endDate)
        setComp(dataCom)
        setBranch(dataBr)
    }

    const minuteTO = 960000
    // 16-menit refersh hitungan ~ MS ~
    useEffect(() => {

        if(UbahTgl){
            axios.get(baseURL,{
                params : {
                    startDate : Start,
                    endDate : Last, 
                    comparison : Compare,
                    branch : Branch,
                    onlyDiva : '',
                }
            }).then((response) => {
                if(response.data.data.length > 0) {
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
                    }, minuteTO)
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
    },[Start, Last, Compare, Branch], minuteTO)

    const footer = (tooltipItems) => {
        let chrTool = (tooltipItems)
        console.log(chrTool);
        // navigate('', chrTool)

        //ini data percobaan
        let sum = 0;      
        tooltipItems.forEach(function(tooltipItem) {
            sum += tooltipItem.parsed.y;
        });
        return 'Sum: ' + sum;
    }

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
            callbacks: {
              footer: footer,
            },
            tooltip: {
                enable: true,
                titleAlign: 'center',
            }
        },
    };

    return(
        <>
            <div className="bg-white rounded w-full p-1">
                <div className='flex justify-end relative items-center font-mono text-black -mt-2 '>
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




