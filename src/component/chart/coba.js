//Data grafik
import React, {useState} from 'react';
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
// import { useNavigate } from 'react-router-dom';

function CobaChart(){

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // const navigate = useNavigate()
    
    //data yg akan dikirim
    const [label, setLabel] = useState([])
    const [vall, setVall] = useState([])
    const [Ltip, setLtip] = useState([])
    const [Vtip, setVtip] = useState([])

    const sHtool =() => {
      console.log('S data : ', label);
      console.log('S data : ', vall);

      setLtip(label)
      setVtip(vall)
      // navigate('/detdtsalesman')
    }
    
    const ovTip = (tooltipItem) => {
      let tp = tooltipItem
      let dtLabel = (tp.label)
      let dtVall = (tp.formattedValue)

      setLabel(dtLabel)
      setVall(dtVall)
    }

    // useEffect(() => {
    //   // ovTip()
    // })

    const labels = ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01'];
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Pembayaran',
          data: [25, 38, 3, 53, 46, 30, 5, 10, 60, 17],
          backgroundColor: 'rgba(255, 112, 92, 0.7)',
        },
          
      ]
    }
    
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,

      // showTooltips: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    
      plugins: {
        legend: {
          position: 'bottom',
        },
        tooltip: {
          mode: "index",
          intersect: false,
          enable: true,
          titleAlign: 'center',

          filter: function(tooltipItem){
            ovTip(tooltipItem)
            return tooltipItem.datasetIndex === 0 
          },
        },
        title: {
          display: true,
          text: 'Bar Chart Pembayaran',
        },
      },
    };

    return(
        <>            
            <div className='bg-white rounded w-full'>

                <Bar 
                  options={options} 
                  onClick={() => sHtool()}
                  data={data} 
                  // ref={chartRef}
                />

                <div className='p-1'>
                  <div className='p-2 bg-teal-400 rounded-lg'>
                    <div>Data Active</div>
                    <div className='flex'>
                      <div className='flex mr-2'>
                        Tanggal : {Ltip} 
                      </div>
                      <div>
                        Value : {Vtip}
                      </div>

                    </div>
                  </div>
                </div>

            </div>
        </>
    )
}

export default CobaChart

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
