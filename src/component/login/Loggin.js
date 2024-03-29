import axios from '../config/api/axios'
import Logo from '../../assets/log.png'
import LogoCandi from '../../assets/L_Candi.png'
import useAuth from '../../hooks/useAuth'
import React, { useEffect, useRef, useState } from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import { AiFillTags } from 'react-icons/ai'
import { SiAudiomack } from 'react-icons/si'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { MdShoppingBasket } from 'react-icons/md'
import { NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const LOGIN_URL = '/api/Auth/Login'

function Loggin () {
    
    const menu = [
        // {name:'Dashboard', icon: <MdDashboard/>, path:'/dash'},
        {name:'Sales', icon: <SiAudiomack/>, path:'/sales'},
        {name:'Finance', icon: <BiMoneyWithdraw/>, path:'/finance'},
        {name:'Logistik', icon: <FaBoxOpen/>, path:'/Logistik'},
        {name:'Merchandise', icon: <AiFillTags/>, path:'/MD'},
        {name:'Grosir', icon: <MdShoppingBasket/>, path:'/Grosir'},
    ];

    // const navigate = useNavigate()

    const {setAuth} = useAuth(useAuth)  
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(''); 

    // Server mati
    const sToastMErr = () =>{
        toast.error('Server Offlane', {
            position: toast.POSITION.TOP_CENTER
        })
        console.log('Server Offline');
    }

    //Salah Usernam and Password
    const sToastU = () =>{
        toast.warning('User Sudah Login pada perangkat lain', {
            position: toast.POSITION.TOP_CENTER
        })
    }
    
    const sToastFailLog = () =>{
        toast.warning('Username dan Password Salah', {
            position: toast.POSITION.TOP_CENTER
        },[])
    }

    // useEffect(() => {    
    //   let userData = sessionStorage.getItem('userData')
    //   if(userData){
    //     navigate('/sales')
    //     console.log('Ads Data');
    //   } else{
    //     console.log('~~~~~ Mau Login ? ~~~~~');
    //   }
    // }, [navigate])

    //Login success
    // const sToastLogIn =() =>{
    //     toast.success('Login Berhasil, Selamat Datang...!', {
    //         position: toast.POSITION.TOP_CENTER
    //     })
    //     console.log('dah masuk');
    // }
    
    // useEffect(() => {
    //     userRef.current.focus();
    //     if(sessionStorage.getItem('userData'))
    //     {
    //         navigate('/sales')
    //     } else{
    //         console.log('~ Session Kosong ~');
    //     }
    // }, [navigate])

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
          sessionStorage.setItem("userData", JSON.stringify(response.data));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ username, password, roles, accessToken });
          setUser("");
          setPwd("");        
          setErrMsg(sToastU(response?.data?.errors))
          
          setSuccess(response?.data?.success)
            console.log('Pengecekan');
            console.log(response?.data?.nama);
            console.log('Error',response?.data?.errors);
        } catch (err) {
        if (!err?.response) {
            setErrMsg(sToastMErr(err.response));
        } 
            else if (err.response?.data?.errors) {
            setErrMsg(err.response?.data?.errors);
        } 
        else {
            setErrMsg(sToastFailLog());
        }
        errRef.current.focus();
        }
        console.log(origin);
      };
    
    
    return(
        <>
            <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
            {success ? ( 
                <section>
                    
                    
                    <div className='App'>
                        <div className="flex bg-slate-100 rounded-xl h-fit">
                            <div>
                                <img src={Logo} alt='sakir' className={`sm:w-0 md:w-32 lg:w-fit rounded-l-xl duration-500 hover:text-yellow-600`} />

                            </div>
                            
                            <div className="sm:p-1 md:p-3 lg:p-16  ">
                                
                                <h1 className='flex justify-center text-green-500 '>
                                    Login Berhasil
                                </h1>

                                <div className='flex-row items-center'>
                                    
                                    <div className='sm:p-1 md:p-3 lg:p-3 items-center bg-marron flex '>

                                        {menu.map((val, index) => {
                                            return (
                                                <NavLink
                                                    key = {index} 
                                                    to={val.path}               
                                                    className={`cursor-pointer no-underline flex flex-row duration-300 items-center 
                                                                text-gray-100 overflow-y-visible hover:bg-light-white 
                                                                hover:text-black rounded-lg px-2.5 py-4 -ml-2 -mr-2`} >

                                                            <div className={`ml-1 text-2xl `}>
                                                                {val.icon}
                                                            </div>

                                                            <div className={`ml-2 duration-50`} >{val.name}</div> 
                                                </NavLink>
                                            );
                                        })}

                                    </div>                     
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            ):(

                <section className="flex rounded-xl bg-light-white shadow-lg text-black">
                    

                {/* Gambar */}
                    <div className="">
                        <img src={Logo} alt='sakir' className={`sm:w-0 md:w-0 lg:w-48 rounded-l-xl duration-500 hover:text-yellow-600`} />
                    </div>

                    {/* Login */}
                    <div className="sm:p-1 md:p-2 lg:p-3">
                        <div className='p-1 rounded-xl text-white'>

                            <form onSubmit={handleSubmit}>

                                {/* Header Login */}
                                <div className=''>
                                    <div className='lg:w-full justify-center flex'>
                                        <img src={LogoCandi} alt='sakir' className={`justify-center lg:w-68 md:w-48 sm:w-32`} />
                                    </div>

                                    <div className='flex justify-center font-mono mt-2'>
                                        <h2>
                                            Login
                                        </h2>
                                    </div>

                                    <div className="text-xl">
                                        <label htmlFor='Username' className='justify-start flex'>
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

                                    <div className="text-xl">
                                        <label htmlFor='Password' className='justify-start flex'>
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

                                    <div className='mt-4 text-xl font-mono'>
                                        <button className='w-full p-2 bg-blue-300 hover:bg-blue-400 text-black rounded-md'>Log In</button>
                                    </div>                                  

                                </div>

                                <div className='mt-3 sm:-mb-14 md:-mb-14 lg:-mb-20'>
                                    <div className='text-red-700 flex w-full justify-center rounded items-center font-mono'>
                                        
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