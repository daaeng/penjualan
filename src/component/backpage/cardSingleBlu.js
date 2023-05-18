import React from "react";

const CardSingleBlu = (props) => {
    return(
        <>
            <div className="">
                <div className="flex justify-end">
                    <div className='bg-blue-600 sm:w-28 md:w-34 lg:w-72 rounded-tl-full relative sm:h-28 md:h-34 -mb-36'>
                    </div>

                </div>
                
                <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                    p-1 px-2 w-auto relative rounded-md text-black bg-abucream hover:bg-light-white hover:text-black'>
                    
                    <h6 className='lg:col-span-1'>
                        {props.atasBru()}
                    </h6>                    
                    
                    <div className="flex justify-end lg:row-span-3 mt-1 mr-1 -mb-2 items-center ">
                        <div className=" bg-blue-600 p-3 rounded-lg mr-2">
                            {props.kananBru()}
                        </div>
                    </div>  
                    
                    <div className='lg:col-span-1 font-bold text-4xl mb-2 ml-2'>
                        {props.bwhBru()}
                    </div>

                    <p className="lg:col-span-2 text-redd text-xs mb-1">
                        ▼ 11% Last Month
                    </p>
                
                </div>    
            </div>
        </>
    )
}

export default CardSingleBlu

// <div className="mt-32">
//                 <div className="flex justify-end">
//                     <div className='flex justify-end bg-blue-600 sm:w-28 md:w-34 lg:w-72 p-3 rounded-tl-full relative sm:h-28 md:h-34 -mb-32'>
//                     </div>

//                 </div>
                
//                 <div className='grid sm:ml-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 0 md:ml-5 md:mb-4 md:mt-3
//                     p-2 w-auto relative rounded-md text-black bg-slate-300 hover:bg-white hover:text-black'>
                    
//                     <h4 className='lg:col-span-1 mt-2'>
//                         {props.atasBru()}
//                     </h4>                    
                    
//                     <div className='flex justify-end items-center'>
//                         <div className='lg:row-span-2 md:-mt-0 sm:-mt-10 sm:ml-6 p-2 w-16 h-14 ml-10 rounded-md -mt-4 bg-blue-500 flex justify-center hover:text-black text-white'>
//                             {props.kananBru()}
//                         </div>
//                     </div>
                    
//                     <h6 className='lg:col-span-1'>
//                         {props.bwhBru()}
//                     </h6>
                
//                 </div>  
//             </div>

