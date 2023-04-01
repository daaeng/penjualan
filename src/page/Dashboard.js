import React from 'react'
// import Sidebar from '../component/Sidebar/sidebar';
// import Header from '../component/Header/header'
import Dash from '../component/Dash/dash'
import Sdbar from '../component/Sidebar/sdbar';
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
          <section className={`bg-marron max-h-128 flex flex-wrap`}>
            
            <Dash/>

            <div className='flex justify-end bg-marron text-white px-4 w-screen'>
              Ini Paling Bawah

            </div>
          </section>
        </div>
      </div>
      
      
    </>
    
  )
}

export default Dashboard;