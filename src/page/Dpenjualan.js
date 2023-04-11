import '../App.css'
import Detpenj from "../component/Det_pen/detpenj"
import Sdbar from '../component/Sidebar/sdbar'
// import Header from "../component/Header/header"
// import Sidebar from '../component/Sidebar/sidebar'

function Dpenjualan (){

    return(
        
        <>

            <div>
                <div>
                {/* <Sidebar/>
                <Header/> */}
                <Sdbar/>

                </div>

                <div>
                <section className={`bg-gray-50 -mt-1`}>
                    
                    <Detpenj/>

                </section>
                </div>
            </div>
            {/* <Sidebar/>
            <Header/>
            
            <div className=" bg-white" >
        
                <section className='flex-1 '>
                    
                    <Detpenj/>
                    
                </section>
            </div> */}

        </>
    )
}

export default Dpenjualan