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

const baseURL = '/rptReact/Dashboard/getSalesRetur?'

function ChartKNN(){

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
                              label : 'amNett',
                              fill: true,
                              data : response.data.data.map((indiData) => indiData.amNett),
                              backgroundColor: 'rgba(250, 0, 0, 0.3)',
                          },
                          {
                              label : 'amSI',
                              fill: true,
                              data : response.data.data.map((indiData) => indiData.amSI),
                              backgroundColor: 'rgba(49, 217, 234, 0.5)',
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
      <div className='bg-white rounded w-full p-1'>
        {chart !== null? (
            <Bar options={options} data={chart}/>
        ):(
            <div className="flex lg:text-xl md:text-lg sm:text-base justify-center lg:p-72 md:p-56 sm:p-24">
                <Loadeer/>
                {console.log('Loading')}
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
        text: 'Chart.js Horizontal Bar Chart',
        },
    },
};
