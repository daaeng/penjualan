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
                <section className={``}>
                    
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