import React from 'react'
import Box from './box'
import DateTimeR from '../dateRange/dateTimeR'
import Dash from './dash'
import {MdDashboard} from 'react-icons/md'
import Card3b from '../backpage/card3b'
import History from './history'
import FilterTime from '../backpage/filterTime'

const Dashbor = () => {
    return(
        <>
            <div className=' sm:ml-0 md:ml-20 mr-3'>
                <div className='ml-2 mt-1'>
                    <div className='grid grid-cols-2'>  
                        <h2 className='col-span-1 font-mono text-black items-center flex'>
                            <MdDashboard className='mr-1' size={'20'}/> Dashboard
                        </h2>

                        <div className='col-span-1 flex justify-end items-center font-mono text-black '>
                            <FilterTime />
                        </div>
                        
                    </div>

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

                <div className='mb-2'>
                    <div className='grid grid-cols-3 p-2'> 
                        
                        <History className='col-span-1'/>
                        
                        <div className='col-span-2'>
                            <History />
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default Dashbor