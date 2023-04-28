import React from 'react'
import {BiTimeFive } from 'react-icons/bi'

export default function FilterTime () {
    
      return (
        <>
            <div className=''>
                <h6 className='flex items-center -mb-2'>
                    Time '1 Hour' 
                    <div className='bg-marron text-white cursor-pointer rounded-md p-1'>
                        <BiTimeFive/>
                    </div>
                </h6>

                {/* <div className='bg-blue-300 w-40'>
                    kotak
                </div> */}
            </div>
        </>

        // <div className=''>
        //     <h6>
        //         {props.title()}
        //     </h6> 
        // </div>
      );
}