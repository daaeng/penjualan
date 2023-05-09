import React, {useState } from 'react'
import {BiTimeFive } from 'react-icons/bi'
// import { NavLink } from 'react-router-dom';
import DateTimeR from '../dateRange/dateTimeR'
import Box2 from '../Dash/box2';

export default function FilterTime () {

    const [bka, setBka] =  useState(false);

    // const mnFilterTime = [
    //     {name:'Last', path:'-'},
    //     {name:'1 Hour', path:''},
    //     {name:' 2 Hours', path:''},
    //     {name:' 3 Hours', path:''},
    //     {name:' 6 Hours', path:''},
    //     {name:' 1 Day', path:''},
    //     {name:' 2 Days', path:''},
    //     {name:' 3 Days', path:''},
    //     {name:' 1 Week', path:''},
    //     {name:' 2 Weeks', path:''},
    //     {name:' 3 Weeks', path:''},
    //     {name:' 4 Weeks', path:''},
    //     {name:' 1 Month', path:''},
    //     {name:' 2 Months', path:''},
    //     {name:' 3 Months', path:''},
    //     {name:' 6 Months', path:''},
    //     {name:' 1 Year', path:''},
        
    // ]
    
      return (
        <>
            <div className=''>
                <h6 className='flex items-center -mb-2'>
                    Time '1 Hour' 
                    <div className='bg-marron text-white cursor-pointer rounded-md p-1'>
                        <BiTimeFive onClick={() => setBka(!bka)}/>
                    </div>
                </h6>

            </div>

            <div className='flex justify-end'>
                <div className={`flex bg-redd rounded-tl-xl rounded-bl-xl rounded-br-xl w-fit fixed mt-4 ${bka ? 'mr-0' : 'show'}`}>
                    <ul className={`-ml-7 mr-1 mt-1 ${!bka  && 'hidden' }`}>
                        <div className='flex justify-end'>
                            <DateTimeR/>
                        </div>

                        <div className='flex gap-1 mt-3'>
                            <Box2/>
                            <Box2/>
                        </div>

                        {/* <div className='flex space-x-1'>
                            {mnFilterTime.map((val, index) => {
                                return(                 

                                    <NavLink
                                        key = {index} 
                                        to={val.path}
                                        
                                        className={`cursor-pointer no-underline flex duration-300 
                                        ${!bka && 'active' }items-center text-gray-100 overflow-y-visible
                                        hover:bg-light-white hover:text-white px-1`} >

                                        <li className='flex w-12 p-1 items-center'>
                                            <div className={`text-1xl duration-50 flex`} >{val.name}</div> 
                                        </li>

                                    </NavLink>                           
                                );
                            })}

                        </div> */}
                    </ul>

                </div>
            </div>

        </>

        // <div className=''>
        //     <h6>
        //         {props.title()}
        //     </h6> 
        // </div>
      );
}