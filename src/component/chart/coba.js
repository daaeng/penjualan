//Data grafik
import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

function CobaChart(onChange){

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const navigate = useNavigate()
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
      console.log('S data : ', tool);

      onChange={label, vall}
      // console.log('ini data : ', tool.label);
      // console.log('ini data : ', tool.formattedValue);
      // console.log('ini data : ', tool);
      navigate('/detdtsalesman', label, vall, tool)

    }
    
    const ovTip = (tooltipItem) => {
      let tip = tooltipItem
      // setTool(tip)
      console.log('data : ', tip);
    }

    // useEffect(() => {
    //   sHtool(navigate('/detdtsalesman'))
    // })

    const options = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,

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
          enable: true,
          titleAlign: 'center',

          filter: function(tooltipItem){
            setTool(tooltipItem)
            return tooltipItem.datasetIndex === 0 
          }
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

    // const chartRef = useRef();
    // const onClick = (event) => {
    //   const {current:chart} =chartRef;

    //   if (!chart) {
    //     return;
    //   }
      
    //   console.log(getElementAtEvent(chartRef.current, event));
    //   console.log(getDatasetAtEvent(chartRef.current, event));
    // }

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

