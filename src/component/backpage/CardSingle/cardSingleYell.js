import React from "react";

const CardSingleYell = (props) => {
    return(
        <>
            <div className="">
                <div className="flex justify-start">
                    <div className='bg-yellow-500 sm:w-28 md:w-34 lg:w-72 rounded-br-full relative sm:h-22 md:h-28 lg:h-34 -mb-36'>
                    </div>

                </div>
                
                <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                    p-1 px-2 w-auto relative rounded-md text-teal-600 
                    bg-gradient-to-r from-light-white to-yellow-200 hover:bg-light-white hover:text-black cursor-pointer'>
                    
                    <h6 className='lg:col-span-1'>
                        {props.atasKng()}
                    </h6>                    
                    
                    <div className="flex justify-end lg:row-span-3 mr-1 -mb-2 items-center ">
                        {props.kananKng()}
                        {/* <BsBoxSeamFill className="sm:w-0 md:w-fit text-yellow-400 -rotate-45 md:mb-2 lg:mb-0" size={'70'}/> */}
                    </div>  
                    
                    <p className='lg:col-span-1 font-bold text-4xl mb-2 ml-2 sm:-mt-12 md:-mt-14 lg:-mt-0 sm:text-xl md:text-3xl lg:text-4xl'>
                        {props.bwhKng()}
                    </p>

                    <p className="lg:col-span-2 font-bold text-green-700 text-xs mb-1 sm:-mt-4 md:-mt-3 lg:-mt-0">
                        ▲ 9% Last Month
                    </p>
                
                </div>  
            </div>
        </>
    )
}

export default CardSingleYell
