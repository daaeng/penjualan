import React, {} from 'react'
import {MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {NavLink } from 'react-router-dom'
import Box2 from './box2'

function Box () {
  
  const menBox = [
    {name:'Pelanggan', icon:<FaUsers size={'35'}/>, value:'1.865', color:'bg-red-300', path:'/pel'},
    {name:'Item', icon:<MdShoppingBasket size={'35'}/> , value:'1.865', path:'/item'},
    {name:'Penjualan', icon:<MdShoppingCartCheckout size={'35'}/> , value:'1.865', path:'/dpbel'},
    {name:'Pembayaran', icon:<MdPayments size={'35'}/> , value:'1.865', path:'/dpem'},
    
  ]

  return (
    <>
      <div className='flex justify-center mt-4'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 rounded-lg ml-2 w-full'>

          <div className='md:col-span-2 lg:row-span-2 lg:col-span-1 '>
            <Box2/>
          </div>
        
          {menBox.map((val, index) =>{
            return(
              <>
                <NavLink
                  key= {index}
                  to= {val.path}
                  className={`md:col-span-1 lg:col-span-1 cursor-pointer no-underline p-2 rounded-md bg-white shadow-md`}>
                      
                    <div className='grid lg:grid-cols-2 -mt-4 px-3 py-1 w-auto rounded-md text-marron bg-slate-300 hover:bg-light-white hover:text-black'>
                        <h4 className='lg:col-span-1'>
                          {val.value}
                        </h4>                    
                        
                        <div className='flex justify-end'>
                          <div className='lg:row-span-2 p-2 w-16 h-14 ml-10 md:mt-0 rounded-md -mt-4 bg-marron flex justify-center hover:text-black text-darkgolden'>
                            {val.icon}
                          </div>
                        </div>
                        
                        <h6 className='lg:col-span-1'>
                          {val.name}
                        </h6>
                    
                    </div>  
                                                  
                </NavLink> 
              </>
            )
          })}
        
        </div>

      </div>

      
    
    </>
  )
}

export default Box

