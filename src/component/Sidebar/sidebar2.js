import { useState } from 'react'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {GiChessBishop} from 'react-icons/gi'

const Sidebar2 = () => {

    const [open, setOpen] =  useState(true);

    return(
        <>
            <div className="flex">
                <div className = {` bg-dark-purple h-screen p-5 pt-8 ${open ? 'w-64' : 'w-24'} duration-300 relative`}>
                    
                    <BsArrowLeftCircleFill 
                    className={`text-white bg-dark-purple text-3xl rounded-full 
                    absolute -right-3 top-4 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}` } 
                    onClick={()=> setOpen(!open)}/>

                    <div className='inline-flex'>
                        
                        <GiChessBishop className='bg-white rounded-md text-4xl cursor-pointer block float-left mr-2'/>
                        <h3 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                            Shoping
                        </h3>

                    </div>
                </div>

                    <div className="p-7">
                        Home page
                    </div>
            </div>
        </>
    )
}

export default Sidebar2