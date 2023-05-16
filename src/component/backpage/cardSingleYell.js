import React from "react";

const CardSingleYell = (props) => {
    return(
        <>
            <div className="">
                <div className="flex justify-start">
                    <div className='bg-yellow-500 sm:w-28 md:w-34 lg:w-72 p-3 rounded-tr-full relative sm:h-28 md:h-34 -mb-32'>
                    </div>

                </div>
                
                <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                    p-2 w-auto relative rounded-md text-black bg-slate-300 hover:bg-white hover:text-black'>
                    
                    <h6 className='lg:col-span-1 mt-2'>
                        {props.atasKng()}
                    </h6>                    
                    
                    <div className='flex justify-end items-center'>
                        <div className='lg:row-span-2 md:-mt-0 sm:-mt-10 sm:ml-6 p-2 w-16 h-14 ml-10 rounded-md -mt-4 bg-yellow-500 flex justify-center hover:text-black text-white'>
                            {props.kananKng()}
                        </div>
                    </div>
                    
                    <h4 className='lg:col-span-1'>
                        {props.bwhKng()}
                    </h4>
                
                </div>  
            </div>
        </>
    )
}

export default CardSingleYell

// <div className="">
                
//                 <div className='grid sm:ml-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 0 md:ml-5 md:mb-4 md:mt-3
//                     p-2 w-auto relative rounded-md text-black bg-slate-300 hover:bg-white hover:text-black'>
                    
//                     <h4 className='lg:col-span-1 mt-2'>
//                         {props.atasKng()}
//                     </h4>                    
                    
//                     <div className='flex justify-end items-center'>
//                         <div className='lg:row-span-2 md:-mt-0 sm:-mt-10 sm:ml-6 p-2 w-16 h-14 ml-10 rounded-md -mt-4 bg-yellow-500 flex justify-center hover:text-black text-black'>
//                             {props.kananKng()}
//                         </div>
//                     </div>
                    
//                     <h6 className='lg:col-span-1'>
//                         {props.bwhKng()}
//                     </h6>
                
//                 </div>  
                
//                 <div className=" -mt-32">
//                     <div className='bg-yellow-500 sm:w-28 md:w-34 lg:w-72 p-4 rounded-tr-full relative sm:h-28 md:h-34 -mb-32'>

//                         <h4 className=''>
//                             {props.atasKng()}
//                         </h4> 

//                         <h6 className='mt-4'>
//                             {props.bwhKng()}
//                         </h6>
                        
//                     </div>
//                 </div>
//             </div>


