import React from 'react'
import Sidebar from '../component/Sidebar'
import './Dash.css'
import Dash from '../component/Dash/dash'

//import Sidebar2 from '../component/Sidebar/sidebar2'
import '../App.css'
import Header from '../component/Header/header'

function Dashboard() {
  
  return (

    <> 

      <div className="w-full min-h-screen bg-white flex flex-row " >
        
          <Sidebar/>
          
        <section className='flex-1'>
          <Header/>
  
          <div className=" pt-2 mt-2 px-2">
  
            <Dash/>
                        
          </div>
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