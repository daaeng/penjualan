import React from "react";
import Penjualan from '../chart/penjualan.js';
import {useNavigate} from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

const Det_penjualan = () => {

    const navigate = useNavigate()

    return(

        <>
                    
            <div className='flex justify-start mb-3 ml-2'>
                </div>

            <div className='px-5 flex-1 pt-2 ml-5 mr-8'>

                <h3>Detail Penjualan</h3>

            </div>

            <div className='flex flex-row space-x-2 ml-10 mr-10 pt-2'>

                <div className='px-3 pt-3 py-3 ml-2 mb-3 rounded-xl bg-gray-100 '>

                    <Penjualan/>

                </div>
            </div>

            <div>
                
            </div>

        </>
    
    )
}


export default Det_penjualan