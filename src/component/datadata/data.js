// https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example


// import axios from '../config/api/axios'
// import Logo from '../../assets/log.png'
// import AuthContext from '../../context/AuthProvider'
// import React, { useContext, useEffect, useRef, useState } from 'react'

// // import { toast } from 'react-toastify'
// // import { Router } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


// function Loggin () {
//     const LOGIN_URL = '/api/Auth/Login';
    
//     const navigate = useNavigate()
//     const {setAuth} = useContext(AuthContext);  

//     const userRef = useRef();
//     const errRef = useRef();

//     const [username, setUser] = useState('');
//     const [password, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false); 

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [username, password])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios
//           .post(
//             LOGIN_URL,
//             ({ username, password }),
//             {
//               headers: { "Content-Type": "multipart/form-data" },
//               credentials: true,
//               origin: true,
//             }
//           );
//           localStorage.setItem("User", JSON.stringify(response));
//           const accessToken = response?.data?.accessToken;
//           const roles = response?.data?.roles;
//           setAuth({ username, password, roles, accessToken });
//           setUser("");
//           setPwd("");
//           setSuccess(response?.data?.success);
//         } catch (err) {
//           if (!err?.response) {
//             setErrMsg("Server belum merespon");
//           } else if (err.response?.errors) {
//             setErrMsg("Missing Username or Password");
//           } else if (err.response?.success === false) {
//             setErrMsg("Missing Username or Password");
//           } else if (err.response?.status === 401) {
//             setErrMsg("Unauthorized");
//           } else {
//             setErrMsg("Login Failed");
//           }
//           errRef.current.focus();
//         }
//         // console.log(username, password);
//         console.log(origin);
//       };
    
    
//     return(
//         <>
//             {success ?(
//                 <section>
//                     <div>
//                         <div className="flex bg-slate-100 rounded-xl">
//                             <img src={Logo} alt='sakir' className={`sm:w-0 md:w-0 lg:w-48 rounded-l-xl duration-500 hover:text-yellow-600`} />
//                             {/* Login */}
//                             <div className="sm:p-1 md:p-2 lg:p-24 ">
                                
//                                 <h1>
//                                     Login Berhasil
//                                 </h1>

//                                 <button onClick={()=> navigate('/dash')}
//                                         className='p-1 w-full rounded-md bg-slate-400 hover:bg-green-500' >
//                                     Dashboard
//                                 </button>

//                             </div>
//                         </div>


//                     </div>
//                 </section>
//             ):(

//                 <section className="flex rounded-xl bg-slate-200 shadow-lg">
                    

//                 {/* Gambar */}
//                     <div className="">
//                         <img src={Logo} alt='sakir' className={`sm:w-0 md:w-0 lg:w-48 rounded-l-xl duration-500 hover:text-yellow-600`} />
//                     </div>

//                     {/* Login */}
//                     <div className="sm:p-1 md:p-2 lg:p-10 ">
//                         <div className='p-1 rounded-xl'>

//                             <form onSubmit={handleSubmit}>

//                                 {/* Header Login */}
//                                 <div className=''>
//                                     <div className='flex justify-center font-mono'>
//                                         <h2>
//                                             Login
//                                         </h2>
//                                     </div>

//                                     <div className="">
//                                         <label htmlFor='Username'>
//                                             Username
//                                         </label>

//                                         <input 
//                                             type='text'
//                                             id='Username'
//                                             ref={userRef}
//                                             autoComplete='off'
//                                             value={username}
//                                             onChange={(e) => setUser(e.target.value)}
//                                             required
//                                             className=" text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" 
//                                         />

//                                     </div>

//                                     <div className="">
//                                         <label htmlFor='Password'>
//                                             Password
//                                         </label> 
                                    
//                                         <input 
//                                             type='Password'
//                                             id='Password'
//                                             value={password}
//                                             onChange={(e) => setPwd(e.target.value )}
//                                             required                                            
//                                             className="text-gray-500 p-1 rounded-md flex flex-row mb-2 w-72" 
//                                         />
                                    
//                                     </div>

//                                     {/* lupa Password ? */}
//                                     <div className="flex justify-end hover:text-redd cursor-pointer">
//                                         Lupa Password ?
//                                     </div>

//                                     {/* Login Button */}
//                                     <div className='mt-1'>
//                                         <button className='w-full p-1 bg-blue-300 hover:bg-blue-400 rounded-md'>Log In</button>
//                                         {/* <button
//                                                 className={"w-full text-white font-bold py-2 px-4 rounded mt-1  focus:outline-none " + (input.Username == '' || input.Password == '' ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-800" )}
//                                                 type="button" onClick={() => {
//                                                     if (input.Username != '' && input.Password != '') {
//                                                     submit()
//                                                     }
//                                                 }}>
//                                             Login
//                                         </button> */}

//                                         {/* <button type='button' 
//                                                 onClick={()=> navigate('/dash')}
//                                                 className='p-1 w-20 rounded-md bg-slate-400 hover:bg-green-500' >
//                                             Dashboard
//                                         </button> */}
                                    
//                                     </div>

//                                 </div>

//                                 <div className='mt-3 md:-mb-14 lg:-mb-20'>
//                                     <div className='text-red-700 flex w-full justify-center rounded items-center'>
//                                         <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
//                                             {errMsg}
//                                         </p>

//                                     </div>
//                                 </div>
//                             </form>
                            
//                         </div>
//                     </div>
//                 </section>
//             )} 
//         </>
//     )
// }

// export default Loggin

    //-------------------------------------------------------------------------------------------------------------------------------------------------
    
    // const LOGIN_URL = '/api/Auth/Login';
    // const navigate = useNavigate()

    // const [input, setInput] = useState({
    //     Username: '',
    //     Password: ''
    // })

    // function submit() {
    //     let url = LOGIN_URL;
    //     axios({
    //         method: 'POST',
    //         url: url,
    //         headers: {"Content-Type": " multipart/form-data"},
    //         data: input
    //     }).then(response => {
    //       let userdata = {
    //         id: response.data.id,
    //         name: response.data.name,
    //         token: response.data.access_token,
    //       };
    //         localStorage.setItem("User", JSON.stringify(userdata));
    //         toast('login berhasil');
    //         console.log(response);
    //         navigate('/dash')
    //     })
    //       .catch(function (error) {
    //         if(!error) return null
    //         console.log(error);
    //       });
        
    //     console.log(url);
        
    //   }
    
    
    
    
    
    
    
    
    


    
    
    
    
    //-------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    // https://jsonplaceholder.typicode.com/posts
    // https://jsonplaceholder.typicode.com/users
    
    
    // export default [
//     {
//         id: 1,
//         lastName: 'Snow',
//         firstName: 'Jon',
//         age: '35',
//         lastransaksi: '01/01/2023',
//         ttransaksi: 25,
//         pembelian: ''
//     },
    
//     {
//         id: 2,
//         lastName: 'Cersei',
//         firstName: 'Lannister',
//         age: 42,
//         lastransaksi: '02/01/2023',
//         ttransaksi: 38,
//         pembelian: ''
//     },

//     {
//         id: 3,
//         lastName: 'Lannister',
//         firstName: 'Jaime ',
//         age: 31,
//         lastransaksi: '10/01/2023',
//         ttransaksi: 17,
//         pembelian: ''
//     },

//     {
//         id: 4,
//         lastName: 'Stark',
//         firstName: 'Arya ',
//         age: 19,
//         lastransaksi: '03/01/2023',
//         ttransaksi: 3,
//         pembelian: ''
//     },

//     {
//         id: 5,
//         lastName: 'Targaryen',
//         firstName: 'Daenerys ',
//         age: null,
//         lastransaksi: '08/01/2023',
//         ttransaksi: 10,
//         pembelian: ''
//     },

//     {
//         id: 6,
//         lastName: '',
//         firstName: 'Melisandre',
//         age: 29,
//         lastransaksi: '09/01/2023',
//         ttransaksi: 60,
//         pembelian: ''
//     },

//     {
//         id: 7,
//         lastName: 'Clifford',
//         firstName: 'Ferrara ',
//         age: 44,
//         lastransaksi: '06/01/2023',
//         ttransaksi: 10,
//         pembelian: ''
//     },

//     {
//         id: 8,
//         lastName: 'Frances',
//         firstName: 'Rossini ',
//         age: 36,
//         lastransaksi: '05/01/2023',
//         ttransaksi: 46,
//         pembelian: ''
//     },

//     {
//         id: 9,
//         lastName: 'Roxie',
//         firstName: 'Harvey',
//         age: 18,
//         lastransaksi: '07/01/2023',
//         ttransaksi: 2,
//         pembelian: ''
//     },

//     {
//         id: 10,
//         lastName: 'Zahro',
//         firstName: 'Aulia ',
//         age: 24,
//         lastransaksi: '04/01/2023',
//         ttransaksi: 53,
//         pembelian: ''
//     },
// ]

