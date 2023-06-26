//Data grafik
import React, { useEffect, useState } from 'react';
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
import axios from '../config/api/axios';
import Loadeer from '../backpage/Loader/Loadeer';
  
  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
  );

const baseURL = '/rptReact/Dashboard/getSalesRetur?'

function Penjualan(){

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
                                backgroundColor: 'rgba(49, 217, 23, 0.5)',
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
          {chart !== null? (
              <Bar options={options} data={chart}/>
          ):(
              <div className="flex lg:text-xl md:text-lg sm:text-base justify-center lg:p-72 md:p-56 sm:p-24">
                  <Loadeer/>
                  {console.log('Loading')}
              </div>
          )}

        </div>
      </>
    )
}

export default Penjualan

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
        text: 'Bar Chart Penjualan',
      },
    },
};
