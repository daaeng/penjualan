import '../App.css'
import React from 'react'
import Logo from '../assets/log.png'
import { useNavigate } from 'react-router-dom'

function Login (){

    const navigate = useNavigate()

    return(
        
        <>
            <div className='h-full w-full p-44 bg-gray-100'>
                <div className='p-28 mb-1'>           
                    <div className="flex justify-center p-2 ">
                        <div className="inset-0 h-full ">

                            <div className="flex rounded-xl bg-slate-200 shadow-lg">

                                {/* Gambar */}
                                <div className="">
                                    <img src={Logo} alt='sakir' className={`rounded-l-xl cursor-pointer duration-500 hover:text-yellow-600`} />
                                </div>

                                {/* Login */}
                                <div className="p-5 ">
                                    <div className='p-2 rounded-xl'>
                                        <form>
                                            {/* Header Login */}
                                            <div className=''>
                                                <div className='flex justify-center font-mono'>
                                                    <h2>
                                                        Login
                                                    </h2>
                                                </div>

                                                <div className="">
                                                    <label>
                                                        Email
                                                    </label>

                                                    <input className=" text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" id="email" type="text" placeholder="Email" value={'email'}/>

                                                </div>

                                                <div className="">
                                                    <label>
                                                        Password
                                                    </label> 
                                                    
                                                    <input className="text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" id="password" type="password" placeholder="********" value={'password'}/>
                                                
                                                </div>

                                                {/* lupa password ? */}
                                                <div className="flex justify-end hover:text-redd cursor-pointer">
                                                    Lupa password ?
                                                </div>

                                                {/* Login Button */}
                                                <div className="flex justify-center p-2">
                                                    <button className='p-1 w-20 rounded-md bg-slate-400 hover:bg-green-500' onClick={()=> navigate('/dash')}>
                                                        Log in
                                                    </button>    
                                                </div>

                                            </div>

                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login