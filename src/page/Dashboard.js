import React from 'react'
import Sdbar from '../component/Sidebar/sdbar';
import Dashbor from '../component/Dash/dashbor';

function Dashboard() {
  
  return (

    <> 
      <div>
        <div>
          
          <Sdbar/>

        </div>

        <div>
          <section className={`bg-gray-100 -mt-1`}>

            <Dashbor/>
            
          </section>
        </div>
      </div>
      
    </>
    
  )
}

export default Dashboard;