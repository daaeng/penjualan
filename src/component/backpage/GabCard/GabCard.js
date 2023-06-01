import React from "react";
import GabCard3rd from "./GabCard3rd";


const GabCard =() => {

    // // -----------------------------------
    // // ------------ ~ Data 1 ~ -----------
    // const jdl =() => {
    //     return('Piutang')
    // }
    
    // const ang =() => {
    //     return('1.296.541')
    // }

    // // ------------------------
    // // ------------ ~ Data 2 ~ -----------   
    // const jdl1 =() => {
    //     return('Pembayaran')
    // }
    
    // const ang1 =() => {
    //     return('85.314.631')
    // }

    // // ------------------------
    // // ------------ ~ Data 3 ~ -----------
    // const jdl2 =() => {
    //     return('Item Terjual')
    // }
    
    // const ang2 =() => {
    //     return('71.296.541')
    // }

    // // ------------------------
    // // ------------ ~ Data 4 ~ -----------   
    // const jdl3 =() => {
    //     return('penjualan')
    // }
    
    // const ang3 =() => {
    //     return('461.637.189.137')
    // }

    return(
        <>
            <div className="mb-2">
                    <GabCard3rd/>
                {/* <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    
                </div> */}
            </div>
        </>
    )
}

export default GabCard      

// //-------------------------------------------------------------------------------------------------------------------------------------------
//     //Card mrh >---------------------------------------------------------------------------------------------------------------------------------  
//     const atas = () => {
//         return (
//         <>
//             Piutang
//         </>
//         )
//     }
    
//     const kanan = () => {
//         return (
//         <>
            
//         </>
//         )
//     }
 
//     const bwh = () => {
//         return (
//         <>
//             841.110
//         </>
//         )
//     }

//     //-------------------------------------------------------------------------------------------------------------------------------------------
//     //Card Ijo >---------------------------------------------------------------------------------------------------------------------------------
//     const atasIjo = () => {
//         return (
//         <>
//             Pembayaran
//         </>
//         )
//     }

//     const kananIjo = () => {
//         return (
//         <>
            
//         </>
//         )
//     }

//     const bwhIjo = () => {
//         return (
//         <>
//             724.859
//         </>
//         )
//     }

//     //-------------------------------------------------------------------------------------------------------------------------------------------
//     //Card Kng >---------------------------------------------------------------------------------------------------------------------------------
//     const atasKng = () => {
//         return (
//         <>
//             Item Terjual
//         </>
//         )
//     }

//     const kananKng = () => {
//         return (
//         <>
            
//         </>
//         )
//     }

//     const bwhKng = () => {
//         return (
//         <>
//             1.257.924
//         </>
//         )
//     }
    
//     //-------------------------------------------------------------------------------------------------------------------------------------------
//     //Card Bru >---------------------------------------------------------------------------------------------------------------------------------
//     const atasBru = () => {
//         return (
//         <>
//             Penjualan
//         </>
//         )
//     }

//     const kananBru = () => {
//         return (
//         <>
            
//         </>
//         )
//     }

//     const bwhBru = () => {
//         return (
//         <>
//             736.142
//         </>
//         )
//     }
//     return(
//         <>
//         <div className="p-2">

//             <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
//             {/* sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 */}
//                 {/* <div className='grid col-span-1 gap-3 p-2 rounded-lg  w-full
//                                 md:text-lg sm:text-sm '> */}

//                     <CardSingleRed atas = {atas} kanan = {kanan} bwh = {bwh} className='grid lg:col-span-1 md:col-span-2 sm:h-5 md:h-40 lg:h-auto bg-black'/>
//                     <CardSingleGree atasIjo = {atasIjo} kananIjo = {kananIjo} bwhIjo = {bwhIjo} className='grid lg:col-span-1 md:col-span-2'/>
//                     <CardSingleYell atasKng = {atasKng} kananKng = {kananKng} bwhKng = {bwhKng} className='grid lg:col-span-1 md:col-span-2'/>
//                     <CardSingleBlu atasBru = {atasBru} kananBru = {kananBru} bwhBru = {bwhBru} className='grid lg:col-span-1 md:col-span-2'/>

//                 {/* </div> */}
//             </div>
//         </div>
//         </>
//     )