import React from 'react'
import {BsFillEmojiWinkFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {FaEdit} from 'react-icons/fa'

const Modet = () => {
    
    const mnPlg = [
        {name:'Pelanggan', icon:<BsFillEmojiWinkFill size={'35'}/>, icon1: <FaEdit size={'20'}/>},
        {name:'Pelanggan', icon:<BsFillEmojiWinkFill size={'35'}/>, icon1: <FaEdit size={'20'}/>},        
        {name:'Pelanggan', icon:<BsFillEmojiWinkFill size={'35'}/>, icon1: <FaEdit size={'20'}/>},        
        {name:'Pelanggan', icon:<BsFillEmojiWinkFill size={'35'}/>, icon1: <FaEdit size={'20'}/>},        
        {name:'Pelanggan', icon:<BsFillEmojiWinkFill size={'35'}/>, icon1: <FaEdit size={'20'}/>},        
        {name:'Pelanggan', icon:<BsFillEmojiWinkFill size={'35'}/>, icon1: <FaEdit size={'20'}/>},        
        
      ]
  
    
    return(
        <>
            <div className='flex justify-center'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 p-1 rounded-lg ml-2 mr-2 w-full'>
                
                {mnPlg.map((val, index) =>{
                    return(
                    <>
        
                        <NavLink
                            key= {index}
                            to= {val.path}
                            className={`md:col-span-1 lg:col-span-1 cursor-pointer no-underline p-1 rounded-md w-auto`}>

                                <div className='grid lg:grid-cols-3 p-2  rounded-md text-marron bg-slate-200 hover:bg-slate-400 hover:text-white'>
                                    <h4 className='lg:col-span-2'>
                                    {val.icon1}
                                    </h4>
                                    
                                    <div className='lg:row-span-2 p-2 w-16 h-14 ml-3 rounded-md  bg-sky-700 flex justify-center hover:text-black text-darkgolden'>
                                    {val.icon}
                                    </div>
                                    
                                    <h6 className='lg:col-span-2'>
                                    {val.name}
                                    </h6>
                                
                                </div>  
                                                            
                        </NavLink>
                    
                    </>
                    )
                })}
                
                </div>

            </div>
        </>
    )
}

export default Modet