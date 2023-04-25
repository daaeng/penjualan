import React from 'react';
import CobaChart from './coba';

export default function DataChart () {

    const labels = ['01/01/2023', '01/02/2023', '01/03/2023', '01/04/2023', '01/05/2023', '01/06/2023', '01/07/2023', '01/08/2023', '01/09/2023', '01/10/2023'];
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Pembayaran',
            data: [70, 20, 30, 20, 60, 80, 90, 10, 75, 100],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
            
        ]
      }
    
    return (
        <>
            <CobaChart data={data}/>
            {/* <Bar
                options={options} 
                data={data} 
            /> */}
        </>
      );
}