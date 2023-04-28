import React from 'react'
import {MdShoppingBasket } from 'react-icons/md'

const Grosir = () => {

    return(
        <>
            <div className=' sm:ml-14 md:ml-20 mr-3'>
                <div className='ml-2 mt-1'>
                    <div className='grid grid-cols-2'>  
                        <h2 className='col-span-1 font-mono text-black items-center flex'>
                            <MdShoppingBasket className='mr-1' size={'22'}/> Grosir
                        </h2>
                
                    </div>

                    <div className='border ' />

                </div>

            </div>
        
        </>
    )
}

export default Grosir