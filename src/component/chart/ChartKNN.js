//Data grafik
import React, { useEffect, useState } from "react";
import axios from "../config/api/axios";
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
import Loadeer from "../backpage/Loader/Loadeer";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const baseURL = '/rptReact/Dashboard/getSalesByBranch?'

function ChartKNN(){

  const [chart, setChart] = useState(null)

  function tkStDate(year, month) {
    return new Date(year, month, 1);
  }

  const tgl = new Date()
  const firstDate = tkStDate(
    tgl.getFullYear(),
    tgl.getMonth()
  )

  useEffect(() => {

    let data1 = tgl
    let data2 = firstDate

    const token = sessionStorage.getItem('userData')
    if(token){
        axios.get(baseURL,{
            params : {
                startDate : data2,
                endDate : data1
            }
        }).then((response) => {
            // console.log(response.data);
            if(response.data.data.length > 0) {
                setChart({
                    labels : response.data.data.map((indiData) => indiData.description),
                    datasets : [
                        {
                            label : 'amSI',
                            fill: true,
                            data : response.data.data.map((indiData) => indiData.amSI),
                            backgroundColor: 'rgba(210, 38, 30, 0.5)',
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
  })

  return(
    <>
      <div className='bg-white rounded w-full p-1'>
        {chart !== null? (
            <Bar options={options} data={chart}/>
        ):(
            <div className="flex lg:text-xl md:text-lg sm:text-base justify-center lg:p-40 md:p-32 sm:p-24">
                <Loadeer/>
                {/* {console.log('Loading')} */}
            </div>
        )}
          {/* <Detail_pen data={this.this.state.data} /> */}
          {/* <Bar options={options} data={data} /> */}
      </div>
    </>
  )
}

export default ChartKNN

const options = {
    indexAxis: 'y',
    elements: {
        bar: {
        borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
        position: 'right',
        },
        title: {
        display: true,
        text: 'Chart Sales Branch',
        },
    },
};
