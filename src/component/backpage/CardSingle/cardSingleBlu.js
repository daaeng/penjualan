import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/api/axios";
import { MdPointOfSale } from "react-icons/md";
import Loadeer from "../Loader/Loadeer";
// import Loadeer from "../Loader/Loadeer";

// const baseURL = '/rptReact/Dashboard/getSalesRetur?'


const CardSingleBlu = () => {

    // const navigate = useNavigate()

    // const [data, setData] = useState([])
    // const [start, setStart] = useState([])
    // const [end, setEnd] = useState([])
    
    // function tkStDate(year, month) {
    //     return new Date(year, month, 1);
    // }

    // const tgl = new Date()
    // const firstDate = tkStDate(
    //     tgl.getFullYear(),
    //     tgl.getMonth()
    // )

    // function numberWithCommas(x) {
    //     x = x.toString();
    //     var pattern = /(-?\d+)(\d{3})/;
    //     while (pattern.test(x))
    //         x = x.replace(pattern, "$1.$2");
    //     return x;
    //     // console.log(numberWithCommas(1000))
    // }
    
    // setStart(firstDate)
    // setEnd(tgl)
    
    // // const dataInfo = () => {
    // //     if (dataTime) {
    // //         axios.get(baseURL, {
    // //             params : {
    // //                 startDate : start,
    // //                 endDate : end,    
    // //                 comparison : 'LM',
    // //                 isAsper : true,
    // //             }
    // //         }).then(response => {
    // //             setData(response.data.data)
    // //         })
    // //     }
    // // }

    // const minuteTO = 960000
    // // 16-menit
    // useEffect(() => {
    //     axios.get(baseURL, {
    //         params : {
    //             startDate : start,
    //             endDate : end,    
    //             comparison : 'LM',
    //             isAsper : true,
    //         }
    //     }).then(response => {
    //         setData(response.data.data)

    //     },minuteTO)
    // },[start, end], minuteTO)

    // // const perc = data.map((dtObj, idx) => {
    // //     if (data.length < 0 ) {
    // //         <div key = {idx} className=" text-redd">
    // //             ▼ {dtObj.diffSIPerc}% Last Month
    // //         </div>
    // //     } else {
    // //         <div key = {idx} className=" text-green-700">
    // //             ▲ {dtObj.diffSIPerc}% Last Month
    // //         </div>
    // //     }
    // // })

    return(
        <>
            {/* {data.map((dataObj, index) => {
                
                return( */}
                    <div  className="" 
                    // onClick={()=> navigate('/detpenjualan')}
                    >
                        <div className="flex justify-end" >
                            <div className='bg-blue-600 sm:w-28 md:w-34 lg:w-72 rounded-tl-full relative sm:h-22 md:h-28 lg:h-34 -mb-36'>
                            </div>

                        </div>
                        
                        <div className='grid sm:ml-2 sm:mr-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 md:ml-5 md:mr-5 md:mb-4 md:mt-3
                            p-1 px-2 w-auto relative rounded-md text-orange-500
                            bg-gradient-to-l from-light-white to-blue-200 hover:bg-light-white hover:text-black cursor-pointer'>
                            
                            <h6 className='lg:col-span-1 sm:text-xs md:text-sm lg:text-base'>
                                Penjualan
                            </h6>                    
                            
                            <div className="flex justify-end lg:row-span-3 mr-1 -mb-2 items-center ">
                                <MdPointOfSale className="sm:w-0 md:w-fit text-blue-600 -rotate-45 sm:-mt-5 md:mb-2 lg:-mb-7" size={'70'}/>
                            </div>  
                            
                            <div className='lg:col-span-1 font-bold text-4xl mb-2 ml-2 sm:-mt-12 md:-mt-14 lg:-mt-0 sm:text-lg md:text-3xl lg:text-4xl'>
                                {/* {data !== null ? (
                                    <>
                                        {data.map((dataObj, index) => {
                                            return(
                                                <p key = {index} className="mb-0">
                                                    {numberWithCommas(dataObj.amSI  )}
                                                </p>
                                            )   
                                        })}
                                    </>

                                ) : (
                                    <>
                                        <div className="flex lg:text-xl md:text-lg sm:text-base justify-center p-1">
                                            <Loadeer/>
                                        </div>
                                    </>
                                )} */}
                                46363423
                            </div>

                            <div className="lg:col-span-2 font-bold text-xs mb-1 sm:-mt-4 md:-mt-3 lg:-mt-0">  
                                percent '%'
                                {/* {data.map((dataObj, index) => {
                                    if (dataObj.diffSIPerc < 0) {
                                        return(
                                            <div key = {index} className=" text-redd">
                                                ▼ {dataObj.diffSIPerc}% Last Month
                                            </div>
                                          )
                                    } else {
                                        <div key = {index} className=" text-green-700">
                                            ▲ {dataObj.diffSIPerc}% Last Month
                                        </div>
                                    }
                                   
                                },[])} */}
                            </div>
                        
                        </div>    
                    </div>
    
                {/* )
            })} */}

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

