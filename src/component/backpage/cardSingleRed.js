import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const CardSingleRed = (props) => {
    return(
        <>
            <div className="">
                <div className="flex justify-start">
                    <div className='bg-red-600 sm:w-28 md:w-34 lg:w-72 rounded-tr-full relative sm:h-28 md:h-34 -mb-36 '>
                    </div>

                </div>
                
                <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                    p-1 px-2 w-auto relative rounded-md text-black 
                    bg-gradient-to-r from-light-white to-red-200 
                    hover:bg-light-white hover:text-black'>
                    
                    <h6 className='lg:col-span-1'>
                        {props.atas()}
                    </h6>                    
                    
                    <div className="flex justify-end lg:row-span-3 mt-1 mr-1 -mb-2 items-center ">
                        <FaRegMoneyBillAlt className="sm:w-0 md:w-fit text-red-400 -rotate-45" size={'70'}/>
                        {/* <div className=" bg-redd p-3 rounded-lg mr-2">
                            {props.kanan()}
                        </div> */}
                    </div>  
                    
                    <div className='lg:col-span-1 font-bold text-4xl mb-2 ml-2'>
                        {props.bwh()}
                    </div>

                    <p className="lg:col-span-2 font-bold text-red-700 text-xs mb-1">
                        ▼ 9% Last Month
                    </p>
                
                </div>  
            </div>
        </>
    )
}

export default CardSingleRed