import React from 'react'
import {useNavigate} from 'react-router-dom'

const Detpenj = () => {

    const navigate = useNavigate()

    return(
        <>
            <div className={`ml-24 mb-4 flex-wrap w-full`}>

                <div className={`px-8 flex-1 pt-3 bg-`}>

                    <h2 className='font-mono text-black'>Penjualan</h2>

                    <div className='px-1 flex-1 pt-2 pb-2 text-gray-200'>
                        _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
                    </div>
            
                <div className="flex flex-row bg-green-500 ">
                    <div className=" bg-red-100 px-1 py-1 cursor-pointer">
                        <button
                        onClick = {() => navigate ('/')} 
                        className='rounded-md items-center px-1 py-1 bg-gray-300'>
                            Dashboard
                        </button>

                    </div>
                </div>
                <div className="flex flex-row bg-green-500">
                    <div className=" bg-red-100 px-1 py-1 cursor-pointer">
                        <button
                        onClick = {() => navigate ('/')} 
                        className='rounded-md items-center px-1 py-1 bg-gray-300'>
                            Dashboard
                        </button>

                    </div>
                </div>
                <div className="flex flex-row bg-green-500 ml-48 ">
                    <div className=" bg-red-100 px-1 py-1 cursor-pointer">
                        <button
                        onClick = {() => navigate ('/')} 
                        className='rounded-md items-center px-1 py-1 bg-gray-300'>
                            Dashboard
                        </button>

                    </div>
                </div>
                </div>
            </div>

            

        
        
        </>
    )
}

export default Detpenj