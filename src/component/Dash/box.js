import React, {} from 'react'
import {MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {NavLink, useNavigate } from 'react-router-dom'

function Box () {
  const navigate = useNavigate()
  
  const menBox = [
    {name:'Pelanggan', icon:<FaUsers size={'45'}/>, value:'1.865', path:'/pel'},
    {name:'Item', icon:<MdShoppingBasket size={'45'}/> , value:'1.865', path:'/item'},
    {name:'Penjualan', icon:<MdShoppingCartCheckout size={'45'}/> , value:'1.865', path:'/pen'},
    {name:'Pembayaran', icon:<MdPayments size={'45'}/> , value:'1.865', path:'/pem'},
    
  ]

  return (
    <>
      <div className='flex justify-center'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 p-1 rounded-lg ml-2 mr-2'>
        
          {menBox.map((val, index) =>{
            return(
              <>
  
                  <NavLink
                    key= {index}
                    to= {val.path}
                    className={`md:col-span-1 lg:col-span-1 cursor-pointer no-underline p-1 rounded-md w-fit`}>
                      {/* <div className=''> */}
                        <div className='grid lg:grid-cols-3 p-3 w-60 rounded-md text-marron bg-slate-200 hover:bg-slate-400 hover:text-white'>
                            <h4 className='lg:col-span-2'>
                              {val.value}
                            </h4>
                            
                            <div className='lg:row-span-2 p-2 w-16 rounded-md  bg-sky-700 flex justify-center hover:text-black text-darkgolden'>
                              {val.icon}
                            </div>
                            
                            <h6 className='lg:col-span-2'>
                              {val.name}
                            </h6>
                        
                        </div>  

                      {/* </div> */}
                                                    
                  </NavLink>
               
              </>
            )
          })}
        
        </div>

      </div>

      <div className='grid md:grid-cols-8 lg:grid-cols-12 gap-4 p-4 rounded-lg '>
        
        <div onClick = {() => navigate ('/pel')}
        className='bg-gray-300 rounded-md -mt-2 ml-2 md:col-span-4 lg:col-span-3 '>
          <div className='grid lg:grid-cols-3 -ml-4 mb-3 -mt-2 shadow cursor-pointer hover:bg-green-300 
          bg-green-100  justify-between w-full  p-4 rounded-md'>
              <h4 className='lg:col-span-2'>1.865k</h4>
              <FaUsers size={50} className='lg:row-span-2 mt-1 ml-5 text-yellow-600 hover:text-black'/> 
              <h6 className='lg:col-span-2'>Pelanggan</h6>
              
          </div>
        </div>    
            
        <div onClick = {() => navigate ('/item')}
        className='bg-gray-300 rounded-md -mt-2 ml-2 md:col-span-4 lg:col-span-3 '>
          
          <div className='grid lg:grid-cols-3 -ml-4 mb-3 -mt-2 shadow cursor-pointer hover:bg-indigo-300 
          bg-indigo-100  justify-between w-full  p-4 rounded-md'>
              <h4 className='lg:col-span-2'>6.425k</h4>
              <MdShoppingBasket size={50} className='lg:row-span-2 mt-1 ml-5 text-yellow-600 hover:text-black'/> 
              <h6 className='lg:col-span-2'>Item</h6>
              
          </div>

        </div>
          
        <div className='bg-gray-300 rounded-md -mt-2 ml-2 md:col-span-4 lg:col-span-3 '>
          
          <div 
          onClick = {() => navigate ('/dpen')} 
          className='grid lg:grid-cols-3 -ml-4 mb-3 -mt-2 shadow cursor-pointer 
          hover:bg-cyan-300 bg-cyan-100  justify-between w-full  p-4 rounded-md'>
              <h4 className='lg:col-span-2'>2.475k</h4>
              <MdShoppingCartCheckout size={50} className='lg:row-span-2 mt-1 ml-5 text-yellow-600 hover:text-black'/> 
              <h6 className='lg:col-span-2'>Penjualan</h6>
              
          </div>
          
        </div>

        <div className='bg-gray-300 rounded-md -mt-2 ml-2 md:col-span-4 lg:col-span-3 '>
          
          <div onClick = {() => navigate ('/dpem')}
          className='grid lg:grid-cols-3 -ml-4 mb-3 -mt-2 shadow cursor-pointer 
          hover:bg-red-300 bg-red-100  justify-between w-full  p-4 rounded-md'>
              <h4 className='lg:col-span-2'>2.475k</h4>
              <MdPayments size={50} className='lg:row-span-2 mt-1 ml-5 text-yellow-600 hover:text-black'/> 
              <h6 className='lg:col-span-2'>Pembayaran</h6>
              
          </div>

        </div>    
      </div>
    
    </>
  )
}

export default Box

