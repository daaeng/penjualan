import React, {} from 'react'
import {MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {NavLink } from 'react-router-dom'

function Box () {
  // const navigate = useNavigate()
  
  const menBox = [
    {name:'Pelanggan', icon:<FaUsers size={'35'}/>, value:'1.865', path:'/pel'},
    {name:'Item', icon:<MdShoppingBasket size={'35'}/> , value:'1.865', path:'/item'},
    {name:'Penjualan', icon:<MdShoppingCartCheckout size={'35'}/> , value:'1.865', path:'/dpen'},
    {name:'Pembayaran', icon:<MdPayments size={'35'}/> , value:'1.865', path:'/dpem'},
    
  ]

  return (
    <>
      <div className='flex justify-center'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 p-1 rounded-lg ml-2 w-full'>
        
          {menBox.map((val, index) =>{
            return(
              <>
  
                  <NavLink
                    key= {index}
                    to= {val.path}
                    className={`md:col-span-1 lg:col-span-1 cursor-pointer no-underline p-1 rounded-md w-auto `}>
                      {/* <div className=''> */}
                        <div className='grid lg:grid-cols-3 p-3 w-auto rounded-md text-marron bg-blue-100 hover:bg-blue-300 hover:text-white'>
                            <h4 className='lg:col-span-2'>
                              {val.value}
                            </h4>
                            
                            <div className='lg:row-span-2 p-2 w-16 h-14 ml-3 rounded-md  bg-sky-700 flex justify-center hover:text-black text-darkgolden'>
                              {val.icon}
                            </div>
                            
                            <h6 className='lg:col-span-2'>
                              {val.name}
                            </h6>

                        
                        </div>  
                            {/* <div className='bg-marron hover:bg-blue-300 flex justify-end w-full text-white -mt-5 p-1 rounded-b-lg'>
                              tess
                            </div> */}

                      {/* </div> */}
                                                    
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

