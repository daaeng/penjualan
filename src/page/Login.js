import '../App.css'
import React from 'react'
import Loggin from '../component/login/Loggin'
// import Logo from '../assets/log.png'
// import { useNavigate } from 'react-router-dom'

function Login (){

    // const navigate = useNavigate()

    return(
        
        <>
            <div className='h-full w-full p-44 bg-gray-100'>
                <div className='p-28 mb-1'>           
                    <div className="flex justify-center p-2 ">
                        <div className="inset-0 h-full ">

                            <Loggin/>
                            
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login