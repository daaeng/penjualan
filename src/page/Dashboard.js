import React from 'react'
import Sidebar from '../component/Sidebar'
import './Dash.css'
import Dash from '../component/Dash/dash'
import '../App.css'
import Header from '../component/Header/header'

function Dashboard() {
  
  return (

    <> 

          <Sidebar/>
          <Header/>

      <div className="bg-white" > 
          
        <section className={`flex-1`}>
          
            <Dash/>
  
        </section>

        {/* <section className="w-24 ">
          <div className="pt-8 flex justify-end space-x-3 mr-5 items-center">
            <BiBell size={'25'}/>
            <BiUserCircle size={'25'}/>
          </div>
        </section> */}

      </div>
      
    </>
    
  )
}

export default Dashboard;