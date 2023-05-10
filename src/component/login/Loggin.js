
import axios from '../config/api/axios'
import Logo from '../../assets/log.png'
import AuthContext from '../../context/AuthProvider'
import React, { useContext, useEffect, useRef, useState } from 'react'

// import { toast } from 'react-toastify'
// import { Router } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import { SiAudiomack } from 'react-icons/si'
// import { BiMoneyWithdraw } from 'react-icons/bi'
// import { FaBoxOpen } from 'react-icons/fa'
// import { AiFillTags } from 'react-icons/ai'
// import { MdDashboard, MdShoppingBasket } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


function Loggin () {
    const LOGIN_URL = '/api/Auth/Login';
    
    // const menu = [
    //     {name:'Dashboard', icon: <MdDashboard/>, path:'/dash'},
    //     {name:'Sales', icon: <SiAudiomack/>, path:'/sales'},
    //     {name:'Finance', icon: <BiMoneyWithdraw/>, path:'/finance'},
    //     {name:'Logistik', icon: <FaBoxOpen/>, path:'/Logistik'},
    //     {name:'Merchandise', icon: <AiFillTags/>, path:'/MD'},
    //     {name:'Grosir', icon: <MdShoppingBasket/>, path:'/Grosir'},
    // ];

    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext);  

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); 

    // useEffect(() => {
    //     if(sessionStorage.getItem('userData')){
    //         navigate('/')
    //     }
    // },[navigate])

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        if(!{username,password})
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios
          .post(
            LOGIN_URL,
            ({ username, password }),
            {
              headers: { "Content-Type": "multipart/form-data" },
              credentials: true,
              origin: true,
            }
          );
          localStorage.setItem("userData", JSON.stringify(response?.data));
          sessionStorage.setItem("userData", JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ username, password, roles, accessToken });
          setUser("");
          setPwd("");        
          setErrMsg(response?.data?.errors)
          setSuccess(response?.data?.success);
            console.log(response?.data?.nama);
            console.log(response?.data?.errors);
        } catch (err) {
          if (!err?.response) {
            setErrMsg("Server belum merespon");
          } else if (err.response?.data?.errors) {
            setErrMsg(err.response?.data?.errors);
          } 
        //   else if (err.response?.data?.success === false) {
        //     setErrMsg("Missing Username or Password");
        //   } else if (err.response?.data?.status === 401) {
        //     setErrMsg("Unauthorized");
        //   }
           else {
            setErrMsg("Login Failed");
          }
          errRef.current.focus();
        }
        console.log(origin);
      };
    
    
    return(
        <>
            {success ?(
                <section>
                    <div>
                        <div className="flex bg-slate-100 rounded-xl">
                            <img src={Logo} alt='sakir' className={`sm:w-0 md:w-0 lg:w-48 rounded-l-xl duration-500 hover:text-yellow-600`} />
                            {/* Login */}
                            <div className="sm:p-1 md:p-2 lg:p-24">
                                
                                <h1 className='flex justify-center'>
                                    Login Berhasil
                                </h1>

                                <div className=''>
                                    <button onClick={()=> navigate('/dash')}
                                            className='p-1 w-full rounded-md bg-blue-300 hover:bg-blue-500' >
                                        Dashboard
                                    </button>                          
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            ):(

                <section className="flex rounded-xl bg-slate-200 shadow-lg">
                    

                {/* Gambar */}
                    <div className="">
                        <img src={Logo} alt='sakir' className={`sm:w-0 md:w-0 lg:w-48 rounded-l-xl duration-500 hover:text-yellow-600`} />
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
                                        <label htmlFor='Username'>
                                            Username
                                        </label>
                                        
                                        <input 
                                            type='text'
                                            id='Username'
                                            ref={userRef}
                                            autoComplete='off'
                                            value={username}
                                            onChange={(e) => setUser(e.target.value)}
                                            required
                                            className=" text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" 
                                        />

                                    </div>

                                    <div className="">
                                        <label htmlFor='Password'>
                                            Password
                                        </label> 
                                    
                                        <input 
                                            type='Password'
                                            id='Password'
                                            value={password}
                                            onChange={(e) => setPwd(e.target.value )}
                                            required                                            
                                            className="text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" 
                                        />
                                        
                                    
                                    </div>

                                    <div className='mt-5'>
                                        <button className='w-full p-1 bg-blue-300 hover:bg-blue-400 rounded-md'>Log In</button>
                                    </div>                                  

                                </div>

                                <div className='mt-3 md:-mb-14 lg:-mb-20'>
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