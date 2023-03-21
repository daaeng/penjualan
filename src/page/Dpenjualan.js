import '../App.css'
import Detpenj from "../component/Det_pen/detpenj"
import Sidebar from "../component/Sidebar"
import Header from "../component/Header/header"

function Dpenjualan (){

    return(
        
        <>
            <Sidebar/>    
            <Header/>
            
            <div className=" bg-white" >
        
                <section className='flex-1 '>
                    <div className=" pt-2 mt-2 px-2">
                        
                        <Detpenj/>
                        
                    </div>
                    
                </section>
            </div>

        </>
    )
}

export default Dpenjualan