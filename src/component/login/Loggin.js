import React from 'react'
import Logo from '../../assets/log.png'
import {useRef, useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthProvider'
import axios from '../config/axios'
// import {baseURL} from '../component/config/axios.js'
// import { useNavigate } from 'react-router-dom'

const LOGIN_URL = `/auth/login`

const Loggin = () => {

    const {setAuth} = useContext(AuthContext);  

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
        try {
          const response = await axios.post(
            LOGIN_URL,
            JSON.stringify({ user, pwd }),
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          setUser("");
          setPwd("");
          setSuccess(true);
        } catch (err) {
          if (!err?.response) {
            setErrMsg("Server belum merespon");
          } else if (err.response?.status === 400) {
            setErrMsg("Missing Username or Password");
          } else if (err.response?.status === 401) {
            setErrMsg("Unauthorized");
          } else {
            setErrMsg("Login Failed");
          }
          errRef.current.focus();
        }
      };
    
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
                    

                {/* Gambar */}
                    <div className="">
                        <img src={Logo} alt='sakir' className={`sm:w-0 md:w-0 lg:w-full rounded-l-xl cursor-pointer duration-500 hover:text-yellow-600`} />
                    </div>

                    {/* Login */}
                    <div className="sm:p-1 md:p-2 lg:p-10 ">
                        <div className='p-1 rounded-xl'>
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
                                    <div className="flex justify-center rounded-lg p-1 bg-blue-400 hover:text-white">
                                        <button> Sign in</button>
                                        {/* <button type='button' 
                                                onClick={()=> navigate('/dash')}
                                                className='p-1 w-20 rounded-md bg-slate-400 hover:bg-green-500' >
                                            Log in
                                        </button>     */}
                                    </div>

                                    

                                </div>

                                <div className='mt-4 -mb-10'>
                                    <div className='text-red-700 flex w-full justify-center rounded items-center'>
                                        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                                            {errMsg}
                                        </p>

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