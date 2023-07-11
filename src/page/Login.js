import '../App.css'
import React from 'react'
import Loggin from '../component/login/Loggin'
// import Logo from '../assets/log.png'
// import { useNavigate } from 'react-router-dom'

function Login (){

    // const navigate = useNavigate()

    return(
        
        <>
            <div className='App'>
            {/* h-full w-full sm:py-56 md:py-60 fixed lg:p-52 */}
                <div className='App-header'>
                {/* md:p-16 lg:p-28 mb-14            */}
                    <div className="flex justify-center -mb-1">
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