import React from 'react'
import Sdbar from '../component/Sidebar/sdbar';
import Dashbor from '../component/Dash/dashbor';
// import Sidebar from '../component/Sidebar/sidebar';
// import Header from '../component/Header/header'
// import Dash from '../component/Dash/dash'
// import Sidebar from '../component/Sidebar'
// import './Dash.css'
// import '../App.css'

function Dashboard() {
  
  return (

    <> 
      <div>
        <div>
          
          <Sdbar/>

        </div>

        <div>
          <section className={``}>

            <Dashbor/>
            
          </section>
        </div>
      </div>
      
    </>
    
  )
}

export default Dashboard;