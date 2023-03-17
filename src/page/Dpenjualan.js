import Navbar from "../component/Navbar/navbar"
import Sidebar from "../component/Sidebar"


function Dpenjualan (){
    return(
        <>
            <div className="w-full min-h-screen bg-white flex flex-row " >
        
                <Navbar/>
                <Sidebar/>
        
                <section className='flex-1'>
                    <div className="bg-black pt-2 mt-10 px-2">
                        halo
                    </div>
                </section>

            </div>
        </>
    )
}

export default Dpenjualan