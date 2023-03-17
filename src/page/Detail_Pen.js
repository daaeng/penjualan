import React from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar/navbar';
import Det_penjualan from '../component/Detail/Det_penjualan';

import '../App.css'

const Detail_pen = () => {

    
    // console.log(props.data_penjual)

    return(

        <>

            <div className="w-full min-h-screen bg-white flex flex-row" >

                <Navbar/>
                <Sidebar/>

                <section className='flex-1 pt-2 mt-14'>

                    <Det_penjualan/>
                
                </section>

            </div>

        </>

    )
}

export default Detail_pen;