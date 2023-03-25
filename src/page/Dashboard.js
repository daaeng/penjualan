import React from 'react'
import Sidebar from '../component/Sidebar/sidebar';
import Header from '../component/Header/header'
import Dash from '../component/Dash/dash'
// import Sidebar from '../component/Sidebar'
// import './Dash.css'
// import '../App.css'

function Dashboard() {
  
  return (

    <> 
      <div>
        <div>
          <Sidebar/>
          <Header/>

        </div>

        <div>
          <section className={``}>
            
              <Dash/>

          </section>

        </div>
      </div>
      
      
    </>
    
  )
}

export default Dashboard;