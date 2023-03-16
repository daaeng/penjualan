import React from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar/navbar';
import Det_penjualan from '../component/Detail/Det_penjualan';
import {useNavigate} from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

const Detail_pen = () => {

    const navigate = useNavigate()
    // console.log(props.data_penjual)

    return(

        <>

            <div className="w-full min-h-screen bg-white flex flex-row" >

                <Sidebar/>

            <section className='flex-1 '>
                <Navbar/>
                <div className='flex justify-start mb-3 ml-2'>
                    <button
                        onClick = {() => navigate ('/')} 
                        className='rounded-md px-1 items-center flex space-x-1 mt-1'>
                        <MdOutlineArrowBackIosNew/>
                        Dashboard
                    </button>
                </div>

                <Det_penjualan/>
                
            
            </section>

            </div>

        </>

    )
}

export default Detail_pen;