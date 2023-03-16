import React from 'react'
import Sidebar from '../component/Sidebar'
import './Dash.css'
import Dash from '../component/Dash/dash'
import Navbar from '../component/Navbar/navbar'

function Dashboard() {
  
  return (

    <>

      <div className="w-full min-h-screen bg-white flex flex-row " >

        <Sidebar/>

        <section className='flex-1'>
          <Navbar/>
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