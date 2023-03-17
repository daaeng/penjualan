import Navbar from "../component/Navbar/navbar"
import Sidebar from "../component/Sidebar"
import Penjualan from "../component/chart/penjualan"


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
                    <div className="ml-2 flex bg-gray-200">
                        <Penjualan/>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Dpenjualan