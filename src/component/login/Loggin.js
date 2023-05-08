
import React from 'react'
import {useState} from 'react'
import { toast } from 'react-toastify'
import axios from '../config/api/axios'
import Logo from '../../assets/log.png'
import { useNavigate } from 'react-router-dom'
// import AuthContext from '../../context/AuthProvider'
// import { Router } from 'react-router-dom'

function Loggin () {
    
    const LOGIN_URL = '/api/Auth/Login';
    const navigate = useNavigate()

    const [input, setInput] = useState({
        Username: '',
        Password: ''
    })

    function submit() {
        let url = LOGIN_URL;
        axios({
            method: 'POST',
            url: url,
            headers: {"Content-Type": " multipart/form-data"},
            data: input
        }).then(response => {
        //   let userdata = {
        //     id: response.data.id,
        //     name: response.data.name,
        //     token: response.data.access_token,
        //   };
            localStorage.setItem("User", JSON.stringify(response));
            toast('login berhasil');
            console.log(response);
            navigate('/dash')
        })
          .catch(function (error) {
            if(!error) return null
            console.log(error);
          });
        
        console.log(url);
        
      }
    
    
    return(
        <>
            {/* {success ?(
                <section>
                    <h1>
                        udah masuk

                    </h1>
                </section>
            ):( */}

                <section className="flex rounded-xl bg-slate-200 shadow-lg">
                    

                {/* Gambar */}
                    <div className="">
                        <img src={Logo} alt='sakir' className={`sm:w-0 md:w-0 lg:w-48 rounded-l-xl duration-500 hover:text-yellow-600`} />
                    </div>

                    {/* Login */}
                    <div className="sm:p-1 md:p-2 lg:p-10 ">
                        <div className='p-1 rounded-xl'>
                            <form >
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
                                            // ref={userRef}
                                            // autoComplete='off'
                                            value={input.Username}
                                            onChange={e => setInput({...input, Username: e.target.value})}
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
                                            value={input.Password}
                                            onChange={e => setInput({ ...input, Password: e.target.value })}
                                            required                                            
                                            className="text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" 
                                        />
                                    
                                    </div>

                                    {/* lupa Password ? */}
                                    <div className="flex justify-end hover:text-redd cursor-pointer">
                                        Lupa Password ?
                                    </div>

                                    {/* Login Button */}
                                    <div className='mt-1'>
                                    <button
                                            className={"w-full text-white font-bold py-2 px-4 rounded mt-1  focus:outline-none " + (input.Username == '' || input.Password == '' ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-800" )}
                                            type="button" onClick={() => {
                                                if (input.Username != '' && input.Password != '') {
                                                submit()
                                                }
                                            }}>
                                        Login
                                    </button>

                                        {/* <button type='button' 
                                                onClick={()=> navigate('/dash')}
                                                className='p-1 w-20 rounded-md bg-slate-400 hover:bg-green-500' >
                                            Dashboard
                                        </button>    
                                        
                                        <button 
                                                id='button'
                                                type='button' 
                                                onClick={()=> navigate('/')}
                                                className='p-1 w-20 rounded-md bg-slate-400 hover:bg-green-500' >
                                            Sign up
                                        </button>     */}
                                        
                                    </div>

                                    

                                </div>

                                {/* <div className='mt-3 md:-mb-14 lg:-mb-20'>
                                    <div className='text-red-700 flex w-full justify-center rounded items-center'>
                                        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
                                            {errMsg}
                                        </p>

                                    </div>
                                </div> */}
                            </form>
                            
                        </div>
                    </div>
                </section>
            {/* )}  */}
        </>
    )
}

export default Loggin