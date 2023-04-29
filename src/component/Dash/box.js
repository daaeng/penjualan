import React, {} from 'react'
import {MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {NavLink } from 'react-router-dom'
import Box2 from './box2'
// import { render } from '@testing-library/react'

function Box () {
  
  const menBox = [
    {name:'Piutang', icon:<FaUsers size={'35'}/>, value:'1.865', color:'#B22222', path:''},
    {name:'Item Terjual', icon:<MdShoppingBasket size={'35'}/> , value:'1.865', color:'#F4A460', path:''},
    {name:'Penjualan', icon:<MdShoppingCartCheckout size={'35'}/> , value:'1.865', color:'#32CD32', path:''},
    {name:'Pembayaran', icon:<MdPayments size={'35'}/> , value:'1.865', color:'#1E90FF', path:''},
    
  ]

  return (
    <>
      <div className='flex justify-center mt-4'>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 rounded-lg ml-2 w-full'>

          <div className='sm:col-span-2 md:col-span-2 lg:row-span-2 lg:col-span-1 '>
            <Box2/>
          </div>
        
          {menBox.map((val, index) =>{  
            
            return(
              
              <NavLink
                key= {index}
                to= {val.path}
                style={{ background: val.color }}
                className={`md:col-span-1 lg:col-span-1 cursor-pointer no-underline p-2 rounded-t-md shadow-md`}>
                    
                  <div  
                      className='grid lg:grid-cols-2 -mt-4 px-3 py-1 w-auto rounded-xl text-redd bg-slate-300 hover:bg-light-white hover:text-black'>
                      
                      <h4 className='lg:col-span-1 mt-2'>
                        {val.value} 
                      </h4>                    
                      
                      <div className='flex justify-end items-center'>
                        <div className='lg:row-span-2 md:mt-0 sm:-mt-1 sm:ml-6 p-2 w-16 h-14 ml-10 rounded-md -mt-4 bg-redd flex justify-center hover:text-black text-darkgolden'>
                          {val.icon}
                        </div>
                      </div>
                      
                      <h6 className='lg:col-span-1'>
                        {val.name}
                      </h6>
                  
                  </div>  
                                                
              </NavLink> 
              
            )
          })}
        
        </div>

      </div>

      
    
    </>
  )
}

export default Box

