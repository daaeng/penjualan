import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardSingleRed = (props) => {

    const navigate = useNavigate()

    return(
        <>
            <div className=" " onClick={()=> navigate('/detpiutang')}>
                <div className="flex justify-start">
                    <div className='bg-red-600 sm:w-28 md:w-34 lg:w-72 rounded-tr-full relative sm:h-22 md:h-28 lg:h-34 -mb-36 '>
                    </div>

                </div>
                
                <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                    p-1 px-2 w-auto relative rounded-md text-yellow-400
                    bg-gradient-to-r from-light-white to-red-200 hover:bg-light-white hover:text-black cursor-pointer'>
                    
                    <h6 className='lg:col-span-1 sm:text-xs md:text-sm lg:text-base'>
                        Piutang
                    </h6>                    
                    
                    <div className="flex justify-end lg:row-span-3 mr-1 -mb-2 items-center ">
                        <FaRegMoneyBillAlt className="sm:w-0 md:w-fit text-red-400 -rotate-45 sm:mb-0 md:mb-2 lg:mb-0" size={'70'}/>
                    </div>  
                    
                    <div className='lg:col-span-1 font-bold text-4xl mb-2 ml-2 sm:-mt-12 md:-mt-14 lg:-mt-0 sm:text-lg md:text-3xl lg:text-4xl'>
                        Angka
                    </div>

                    <p className="lg:col-span-2 font-bold text-red-700 text-xs mb-1 sm:-mt-4 md:-mt-3 lg:-mt-0">
                        ▼ 9% Last Month
                    </p>
                
                </div>  
            </div>
        </>
    )
}

export default CardSingleRed