import React from 'react'
import Box from './box'
import DateTimeR from '../dateRange/dateTimeR'
import Dash from './dash'
import {MdDashboard} from 'react-icons/md'
import Card3b from '../backpage/card3b'

const Dashbor = () => {
    return(
        <>
            <div className=' sm:ml-0 md:ml-20 mr-3'>
                <div className='ml-2 mt-1'>
                    <h2 className='font-mono text-black items-center flex'>
                        <MdDashboard className='mr-1' size={'20'}/> Dashboard
                    </h2>

                    <div className='border ' />

                </div>
                
                <div className='mt-2 mb-2'>
                    <Box/>

                </div>
                    
                <div className='flex justify-end'>
                    <DateTimeR/>
                </div>
                
                <div> 
                    <Dash/>
                </div>
                
                <div> 
                    <Card3b/>
                </div>



            </div>
        </>
    )
}

export default Dashbor