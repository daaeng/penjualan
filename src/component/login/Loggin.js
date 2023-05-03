import React from 'react'
import Logo from '../../assets/log.png'
import {useRef, useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'

const Loggin = () => {

    // const navigate = useNavigate()

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }
    
    return(
        <>
            {success ?(
                <section>
                    <h1>
                        udah masuk

                    </h1>
                </section>
            ):(

                <section className="flex rounded-xl bg-slate-200 shadow-lg">
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                        {errMsg}
                    </p>

                {/* Gambar */}
                    <div className="">
                        <img src={Logo} alt='sakir' className={`rounded-l-xl cursor-pointer duration-500 hover:text-yellow-600`} />
                    </div>

                    {/* Login */}
                    <div className="p-5 ">
                        <div className='p-2 rounded-xl'>
                            <form onSubmit={handleSubmit}>
                                {/* Header Login */}
                                <div className=''>
                                    <div className='flex justify-center font-mono'>
                                        <h2>
                                            Login
                                        </h2>
                                    </div>

                                    <div className="">
                                        <label htmlFor='username'>
                                            Username
                                        </label>

                                        <input 
                                            type='text'
                                            id='username'
                                            ref={userRef}
                                            autoComplete='off'
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
                                            className=" text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" 
                                        />

                                    </div>

                                    <div className="">
                                        <label htmlFor='password'>
                                            Password
                                        </label> 
                                        
                                        <input 
                                            type='password'
                                            id='password'
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required                                            
                                            className="text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" 
                                        />
                                    
                                    </div>

                                    {/* lupa password ? */}
                                    <div className="flex justify-end hover:text-redd cursor-pointer">
                                        Lupa password ?
                                    </div>

                                    {/* Login Button */}
                                    <div className="flex justify-center p-2">
                                        <button> Sign in</button>
                                        {/* <button type='button' 
                                                onClick={()=> navigate('/dash')}
                                                className='p-1 w-20 rounded-md bg-slate-400 hover:bg-green-500' >
                                            Log in
                                        </button>     */}
                                    </div>

                                </div>

                            </form>
                            
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Loggin