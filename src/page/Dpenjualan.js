import '../App.css'
import Detpenj from "../component/Det_pen/detpenj"
import Header from "../component/Header/header"
import Sidebar from '../component/Sidebar/sidebar'

function Dpenjualan (){

    return(
        
        <>
            <Sidebar/>
            <Header/>
            
            <div className=" bg-white" >
        
                <section className='flex-1 '>
                    
                    <Detpenj/>
                    
                </section>
            </div>

        </>
    )
}

export default Dpenjualan