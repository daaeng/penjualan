import '../App.css'
import Detpenj from "../component/Det_pen/detpenj"
import Header from "../component/Header/header"
import Sidebar from '../component/Sidebar/sidebar'

function Dpenjualan (){

    return(
        
        <>

            <div>
                <div>
                <Sidebar/>
                <Header/>

                </div>

                <div>
                <section className={`bg-marron max-h-128`}>
                    
                    <Detpenj/>

                    <div className='flex justify-end bg-marron text-white px-4 w-screen'>
                    Ini Paling Bawah

                    </div>
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