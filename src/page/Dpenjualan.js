import Sidebar from "../component/Sidebar"
import '../App.css'
import Detpenj from "../component/Det_pen/detpenj"
import Header from "../component/Header/header"

function Dpenjualan (){
    return(
        <>
            <div className="w-full min-h-screen bg-white flex flex-row " >
        
                <Sidebar/>
                
                <section className='flex-1'>
                <Header/>
                    <div className=" pt-2 mt-2 px-2">
                        
                        <Detpenj/>
                        
                    </div>
                    
                </section>
            </div>

        </>
    )
}

export default Dpenjualan