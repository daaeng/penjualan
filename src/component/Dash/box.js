import React from 'react'
import {MdShoppingCartCheckout, MdPayments, MdShoppingBasket } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
  // flex flex-row space-x-8
// rounded-xl bg-green-500 bg-opacity-10 p-5 w-40 text-green-600

function Box () {
  const navigate = useNavigate()
  return (
    <>
      <div className='grid lg:grid-cols-8 gap-4 p-4 '>
            
<<<<<<< HEAD
          <div className='shadow cursor-pointer hover:bg-green-300 lg:col-span-2 col-span-1 bg-green-100 flex justify-between w-full  p-4 rounded-lg'>
=======
          <div className='cursor-pointer hover:bg-green-300 lg:col-span-2 col-span-1 bg-green-100 flex justify-between w-full  p-4 rounded-lg'>
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066
              <FaUsers size={25}/>
              <span className='text-sm'>
                  Pelanggan
              </span>
          </div>
            
<<<<<<< HEAD
          <div className='shadow cursor-pointer hover:bg-indigo-300 lg:col-span-2 col-span-1 bg-indigo-100 flex justify-between w-full  p-4 rounded-lg'>
=======
          <div className='cursor-pointer hover:bg-indigo-300 lg:col-span-2 col-span-1 bg-indigo-100 flex justify-between w-full  p-4 rounded-lg'>
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066
              <MdShoppingBasket size={25}/>
              <span className='text-sm'>
                  Item
              </span>
          </div>
          
          <div 
            onClick = {() => navigate ('/dpen')} 
<<<<<<< HEAD
            className={`shadow cursor-pointer hover:bg-cyan-300 lg:col-span-2 
=======
            className={`cursor-pointer hover:bg-cyan-300 lg:col-span-2 
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066
            col-span-1 bg-cyan-100 flex justify-between w-full  
            p-4 rounded-lg `}>
                <MdShoppingCartCheckout size={25}/>
                <span className='text-sm'>
                  Penjualan
                  
                </span>
          </div>
            
<<<<<<< HEAD
          <div className='shadow cursor-pointer hover:bg-red-300 lg:col-span-2 col-span-1 bg-red-100 flex justify-between w-full  p-4 rounded-lg'>
=======
          <div className='cursor-pointer hover:bg-red-300 lg:col-span-2 col-span-1 bg-red-100 flex justify-between w-full  p-4 rounded-lg'>
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066
              <MdPayments size={25}/>
              <span className='text-sm'>
                  Pembayaran
              </span>
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