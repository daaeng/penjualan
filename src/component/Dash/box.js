import React, {} from 'react'
// import {MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
// import {FaUsers} from 'react-icons/fa'
// import {NavLink } from 'react-router-dom'
import Box2 from './box2'
import Labeldt from '../backpage/label'
import Pembelian from '../chart/pembelian'
import CardSingleRed from '../backpage/cardSingleRed'
import CardSingleGree from '../backpage/cardSinglegree'
import CardSingleYell from '../backpage/cardSingleYell'
import CardSingleBlu from '../backpage/cardSingleBlu'
// import { render } from '@testing-library/react'

function Box () {
  
  // const menBox = [
  //   {name:'Piutang', icon:<FaUsers size={'35'}/>, value:'1.865', color:'#E32222', path:''},
  //   {name:'Item Terjual', icon:<MdShoppingBasket size={'35'}/> , value:'1.865', color:'#F4A460', path:''},
  //   {name:'Penjualan', icon:<MdShoppingCartCheckout size={'35'}/> , value:'1.865', color:'#32CD32', path:''},
  //   {name:'Pembayaran', icon:<MdPayments size={'35'}/> , value:'1.865', color:'#1E90FF', path:''},
    
  // ]

  const title = () => {
    return ("Grafik Transaksi")
  }
  
  const isibox = () => {
    return (
      <>
        <Pembelian/>
      </>
    )
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------
  //Card mrh >---------------------------------------------------------------------------------------------------------------------------------  
  const atas = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const kanan = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const bwh = () => {
    return (
      <>
        Hai
      </>
    )
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------
  //Card Ijo >---------------------------------------------------------------------------------------------------------------------------------
  const atasIjo = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const kananIjo = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const bwhIjo = () => {
    return (
      <>
        Hai
      </>
    )
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------
  //Card Kng >---------------------------------------------------------------------------------------------------------------------------------
  const atasKng = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const kananKng = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const bwhKng = () => {
    return (
      <>
        Hai
      </>
    )
  }
  
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //Card Bru >---------------------------------------------------------------------------------------------------------------------------------
  const atasBru = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const kananBru = () => {
    return (
      <>
        Hai
      </>
    )
  }
 
  const bwhBru = () => {
    return (
      <>
        Hai
      </>
    )
  }
  
  return (
    <>
      <div className='flex justify-center mt-4'>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 w-full'>

          <div className='sm:col-span-2 md:col-span-2 lg:col-span-1 h-fit'>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4 p-2 rounded-lg  w-full'>

              <CardSingleRed atas = {atas} kanan = {kanan} bwh = {bwh}/>
              <CardSingleGree atasIjo = {atasIjo} kananIjo = {kananIjo} bwhIjo = {bwhIjo}/>
              <CardSingleYell atasKng = {atasKng} kananKng = {kananKng} bwhKng = {bwhKng}/>
              <CardSingleBlu atasBru = {atasBru} kananBru = {kananBru} bwhBru = {bwhBru}/>

             
            
            </div>

          </div>

          <div className='sm:mt-4 sm:col-span-2 md:mt-3 md:col-span-2 lg:-mt-2 lg:row-span-2 lg:col-span-2 p-2 mb-3'>
            <div className='bg-marron shadow-md p-2 rounded-md w-full '>
              <Labeldt title = {title} />
              <Box2 isibox = {isibox}/>
            </div>
          </div>

        </div>

      </div>
        
    </>
  )
}

export default Box


              // {menBox.map((val, index) =>{  
                
              //   return(
                  
              //     <NavLink
              //       key= {index}
              //       to= {val.path}
              //       // style={{ background: val.color }}
              //       className={`sm:col-span-1 md:col-span-1 lg:col-span-1 no-underline w-auto`}>

              //         <div style={{ background: val.color }} className='sm:w-28 md:w-34 lg:w-72 p-3 rounded-tr-full relative sm:h-28 md:h-34 -mb-32'>
              //         </div>
                      
              //         <div className='grid sm:ml-2 sm:mb-2 sm:mt-1 sm:col-span-1 lg:grid-cols-2 0 md:ml-5 md:mb-4 md:mt-3
              //             p-2 w-auto relative rounded-md text-redd bg-slate-300 hover:bg-white hover:text-black'>
                          
              //             <h4 className='lg:col-span-1 mt-2'>
              //               {val.value} 
              //             </h4>                    
                          
              //             <div className='flex justify-end items-center'>
              //               <div className='lg:row-span-2 md:-mt-0 sm:-mt-10 sm:ml-6 p-2 w-16 h-14 ml-10 rounded-md -mt-4 bg-redd flex justify-center hover:text-black text-darkgolden'>
              //                 {val.icon}
              //               </div>
              //             </div>
                          
              //             <h6 className='lg:col-span-1'>
              //               {val.name}
              //             </h6>
                      
              //         </div>  
                        
                                                    
              //     </NavLink> 
                  
              //   )
              // })} 

