import '../App.css'
import React from 'react'
import Logo from '../assets/log.png'

function Login (){

    return(
        
        <>
            <div>
                <div>           
                    <div className="flex justify-center bg-gray-300 p-2">
                        <div className="inset-0 h-full">

                            <div className="flex rounded-xl bg-white">

                                {/* Gambar */}
                                <div className="">
                                    <img src={Logo} alt='sakir' className={`rounded-l-xl cursor-pointer duration-500 hover:text-yellow-600`} />
                                </div>

                                {/* Login */}
                                <div className="p-5">
                                    <div className='bg-blue-300 p-2 rounded-xl'>
                                        <form>
                                            {/* Header Login */}
                                            <div>
                                            Login

                                                <div className="">
                                                    <label>
                                                        email
                                                    </label>

                                                    <input className="" id="email" type="text" placeholder="Email" value={'email'}/>

                                                </div>

                                                <div className="">
                                                    <label>
                                                        password
                                                    </label> 
                                                    
                                                    <input className="" id="password" type="password" placeholder="********" value={'password'}/>
                                                
                                                </div>

                                                {/* Login Button */}
                                                <div className="flex justify-center p-2">
                                                    <button className='p-1 w-20 rounded-md bg-slate-400'>
                                                        Log in
                                                    </button>    
                                                </div>

                                                {/* lupa password ? */}
                                                <div className="">
                                                    lupa password ?
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