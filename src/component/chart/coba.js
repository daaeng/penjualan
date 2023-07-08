//Data grafik
import React, {useEffect, useState} from 'react';
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
    const [tool, setTool] = useState([])
    
    //data yg akan dikirim
    const [label, setLabel] = useState([])
    const [vall, setVall] = useState([])

    const sHtool =() => {
      let dtLabel = (tool.label)
      let dtVall = (tool.formattedValue)

      setLabel(dtLabel)
      setVall(dtVall)

      console.log('S data : ', dtLabel);
      console.log('S data : ', dtVall);
      // console.log('S data : ', tool);

      // navigate('/detdtsalesman', {
      //   label : label,
      //   value : vall,
      //   chart : tool,
      // })
    }
    
    const ovTip = (tooltipItem) => {
      console.log('Tooltip : ', tooltipItem);

      // let tip = options
      // let dtTip = JSON.stringify(tip.plugins.tooltip.data.datasets)
      // // .map((dt) => dt.data)
      // let dtTip2 = JSON.stringify(tip)
      // let dataTip = JSON.parse(dtTip)
      // let dataTip2 = JSON.parse(dtTip2)
      // console.log('data   => ', dataTip);
      // console.log('data2  => ', dataTip2);

      // // console.log(tool);
    }

    useEffect(() => {
      ovTip()
    })

    const labels = ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01'];
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Pembayaran',
          data: [25, 38, 3, 53, 46, 10, 2, 10, 60, 17],
          backgroundColor: 'rgba(255, 112, 92, 0.7)',
        },
          
      ]
    }
    
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,

      showTooltips: true,
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
          data : data,

          filter:function(tooltipItem){
            // setTool(tooltipItem)
            // return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            return tooltipItem.datasetIndex === 0 
          },
        },
        callbacks: {
          footer : ovTip,
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
                  onClick={() => sHtool(label, vall, tool)}
                  data={data} 
                  // ref={chartRef}
                />

            </div>
        </>
    )
}

export default CobaChart

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
