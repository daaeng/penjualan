import React from "react";

const Card =() => {
    return(
        <>
            <div className="">

                
                <div className="flex justify-start">
                    <div className='bg-redd sm:w-28 md:w-34 lg:w-72 rounded-tr-full relative sm:h-28 md:h-28 -mb-36 '>
                    </div>

                </div>
                
                <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                    p-1 px-2 cursor-pointer w-auto relative rounded-md text-black bg-abucream hover:bg-light-white hover:text-black'>
                    
                    <h6 className='lg:col-span-1'>
                        Jdul
                    </h6>                    
                    
                    <div className='lg:col-span-1 font-bold text-4xl mb-2 ml-2'>
                        Angka
                    </div>

                    <p className="lg:col-span-2 text-green-700 text-xs mb-1">
                        ▲ 9% Last Month
                    </p>
                
                </div>  
            </div>
        </>
    )
}

export default Card