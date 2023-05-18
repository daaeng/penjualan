import React from "react";
import { MdPayments } from "react-icons/md";

const CardSingleGree = (props) => {
    return(
        <>
            <div className="">
                <div className="flex justify-end">
                    <div className='bg-green-600 sm:w-28 md:w-34 lg:w-72 rounded-bl-full relative sm:h-28 md:h-34 -mb-36'>
                    </div>

                </div>
                
                <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                    p-1 px-2 w-auto relative rounded-md text-black bg-abucream hover:bg-light-white hover:text-black'>
                    
                    <h6 className='lg:col-span-1'>
                        {props.atasIjo()}
                    </h6>                    
                    
                    <div className="flex justify-end lg:row-span-3 mt-1 mr-1 -mb-2 items-center ">
                        {/* <div className=" bg-green-600 p-3 rounded-lg mr-2"> */}
                            <MdPayments className="text-green-600 -rotate-45" size={'70'}/>
                        {/* </div> */}
                    </div>  
                    
                    <div className='lg:col-span-1 font-bold text-4xl mb-2 ml-2'>
                        {props.bwhIjo()}
                    </div>

                    <p className="lg:col-span-2 text-green-700 text-xs mb-1">
                        ▲ 9% Last Month
                    </p>
                
                </div>  
            </div>
        </>
    )
}

export default CardSingleGree