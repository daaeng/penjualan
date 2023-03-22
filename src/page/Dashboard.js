import React from 'react'
// import Sidebar from '../component/Sidebar/sidebar'
import './Dash.css'
import Dash from '../component/Dash/dash'
import '../App.css'
import Header from '../component/Header/header'
import Sidebar from '../component/Sidebar/sidebar'

function Dashboard(geser) {

  // const geser = () =>{
  //   return [open, setOpen] = useState(true);
  // }
  // const [open, setOpen] =  useState(true);
  
  return (

    <> 
{/* onClick={()=> open.setOpen()} */}
          <Sidebar/>
          <Header />

      <div className="bg-white" > 
          
        <section className={`flex-1 `}>
          
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