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
          {/* <Sidebar/>
          <Header/> */}
          <Sdbar/>

        </div>

        <div>
          <section className={``}>
            
            {/* <Dash/> */}
            <Dashbor/>

            {/* <div className='flex justify-end bg-marron text-white px-4 w-screen'>
              Ini Paling Bawah
            </div> */}
            
          </section>
        </div>
      </div>
      
    </>
    
  )
}

export default Dashboard;