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


      {/* <Sidebar/>
          <Header/>

      <div className="bg-white" > 
          

        <section className="w-24 ">
          <div className="pt-8 flex justify-end space-x-3 mr-5 items-center">
            <BiBell size={'25'}/>
            <BiUserCircle size={'25'}/>
          </div>
        </section>

      </div> */}
      
    </>
    
  )
}

export default Dashboard;