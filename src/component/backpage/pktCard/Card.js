import React from "react";
// import { FaRegMoneyBillAlt } from "react-icons/fa";

const Card = (props) => {

    return(
        <>
            <div className="p-2 bg-slate-100">

                <div className='flex w-full rounded-xl sm:h-20 md:h-24 lg:h-28 bg-rose-200 overflow-hidden hover:bg-light-white cursor-pointer'>
                    <div className="flex justify-start bg-marron rounded-r-full  
                                    lg:w-20 md:w-16 sm:w-0 md:h-auto sm:h-20">
                        <div className="lg:py-8 md:py-6 sm:py-2 px-2.5 -rotate-45 text-5xl text-light-white">
                            {props.lgo()}
                        </div>
                    </div>
                    
                    <div className="lg:p-2 md:p-1 ml-2">
                        <h6 className='sm:text-sm mb-0 mt-1 md:text-base'>
                            {props.jdl()}
                        </h6>                    
                        
                        <div className='sm:text-lg md:text-xl lg:text-3xl font-bold'>
                            {props.ang()}
                        </div>

                        <p className="sm:text-xs md:text-sm mb-0">
                            ▲ 9% Last Month
                        </p>

                    </div>
                
                </div>  
            </div>
        </>
    )
}

export default Card