import React from 'react'
import {MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Box () {
  const navigate = useNavigate()
  return (
    <>
      <div className='grid lg:grid-cols-8 gap-4 p-4 rounded-lg '>
        <div className='bg-gray-300 rounded-md -mt-2 ml-2 lg:col-span-2 '>
          <div className='-ml-4 mb-3 -mt-2 shadow cursor-pointer hover:bg-green-300 
          bg-green-100  justify-between w-full  p-4 rounded-md'>
              <h4>1.865k</h4>
              <span className='text-sm flex'>
                <FaUsers size={25} className='mr-1 text-yellow-600 hover:text-black'/> 
                Pelanggan
              </span>
          </div>
        </div>    
            
        <div className='bg-gray-300 rounded-md -mt-2 ml-2 lg:col-span-2 '>
          <div className='-ml-4 mb-3 -mt-2 shadow cursor-pointer hover:bg-indigo-300  
          bg-indigo-100  justify-between w-full  p-4 rounded-md'>
              <h4>6.425k</h4>
              <span className='text-sm flex'>
                <MdShoppingBasket size={25} className='mr-1 text-yellow-600 hover:text-black'/>
                Item
              </span>
          </div>
        </div>
          
        <div className='bg-gray-300 rounded-md -mt-2 ml-2 lg:col-span-2 '>
          <div 
            onClick = {() => navigate ('/dpen')} 
            className={`-ml-4 mb-3 -mt-2 shadow cursor-pointer hover:bg-cyan-300 
            bg-cyan-100  justify-between w-full p-4 rounded-md `}>
              <h4>2.475k</h4>
              <span className='text-sm flex'>
                <MdShoppingCartCheckout size={25} className='mr-1 text-yellow-600 hover:text-black'/>
                Penjualan
                  
              </span>
          </div>
        </div>

        <div className='bg-gray-300 rounded-md -mt-2 ml-2 lg:col-span-2 '>
          <div className='-ml-4 mb-3 -mt-2 shadow cursor-pointer hover:bg-red-300 
          bg-red-100  justify-between w-full  p-4 rounded-md'>
            <h4>2.475k</h4>
            <span className='text-sm flex'>
              <MdPayments size={25} className='mr-1 text-yellow-600 hover:text-black'/>
              Pembayaran
            </span>
          </div>
        </div>    
      </div>
    
    </>
  )
}

export default Box

// modal
// <CButton color='success' onClick={() => setVisible(!visible)}>Penjualan</CButton>
// <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
//   <CModalHeader>
//     <CModalTitle>Modal title</CModalTitle>
//   </CModalHeader>
//   <CModalBody>
    
//   <div className='sm:w-auto md:w-1/2 lg:w-full lg:col-span-2 col-span-1 flex justify-between w-full  p-4 rounded-lg bg-gray-100 shadow'>
//     <Penjualan/>
//   </div>

//   </CModalBody>
//   <CModalFooter>
//     <CButton color="secondary" onClick={() => setVisible(false)}>
//       Close
//     </CButton>
//     <CButton color="primary">Save changes</CButton>
//   </CModalFooter>
// </CModal>