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
      
      <Sidebar/>
      <Header/>
      
      <section className={``}>
        
          <Dash/>

      </section>
      
    </>
    
  )
}

export default Dashboard;