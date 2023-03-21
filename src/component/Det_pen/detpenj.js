import React from 'react'
import {useNavigate} from 'react-router-dom'

const Detpenj = () => {

    const navigate = useNavigate()

    return(
        <>
        <div className="flex flex-row bg-green-500 ml-28 ">
            <div className=" bg-red-100 px-1 py-1 cursor-pointer">
                <button
                 onClick = {() => navigate ('/')} 
                 className='rounded-md items-center px-1 py-1 bg-gray-300'>
                    Dashboard
                </button>

            </div>
        </div>

        
        
        </>
    )
}

export default Detpenj