import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Card =() => {

    // const bgCol =[
    //     {name:'Piutang', icon:'', collr:''},
    //     {name:'Pembayaran', icon:'', collr:''},
    //     {name:'Item Terjual', icon:'', collr:''},
    //     {name:'Penjualan', icon:'', collr:''},
    // ]

    return(
        <>
            <div className="p-2">

                <div className='flex w-full rounded-xl bg-red-100 overflow-hidden cursor-pointer'>
                    <div className="flex justify-start bg-marron rounded-r-full  
                                    lg:w-20 md:w-16 sm:w-8 md:h-auto sm:h-20">
                        <div className="lg:py-5 md:py-3 sm:py-2 px-2.5 -rotate-45 text-5xl text-light-white">
                            <FaRegMoneyBillAlt/>
                        </div>
                    </div>
                    
                    <div className="lg:p-2 md:p-1 ml-1">
                        <h6 className='sm:text-sm mb-0 md:text-base'>
                            Jdul
                        </h6>                    
                        
                        <div className='sm:text-lg md:text-xl'>
                            Angka
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