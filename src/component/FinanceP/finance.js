import React from 'react'
import { BiMoneyWithdraw } from 'react-icons/bi'
// import FilterTime from '../backpage/filterTime'

const Finance = () => {
    return(
        <>
            <div className=' sm:ml-14 md:ml-20 mr-3'>
                <div className='ml-2 mt-1'>
                    
                    <div className='grid grid-cols-2'>  
                        <h2 className='col-span-1 font-mono text-white  items-center flex'>
                            <BiMoneyWithdraw className='mr-1' size={'20'}/>Finance
                        </h2>

                        {/* <div className='col-span-1 flex justify-end items-center font-mono text-black '>
                            <FilterTime />
                        </div> */}
                        
                    </div>
              
                    <div className='border ' />

                </div>

            </div>
        </>
    )
}

export default Finance