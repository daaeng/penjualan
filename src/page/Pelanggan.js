import React from 'react'
import Planggan from '../component/Plang/planggan'
import Sdbar from '../component/Sidebar/sdbar'
// import Header from '../component/Header/header'
// import Sidebar from '../component/Sidebar/sidebar'

const Pelanggan = () => {
  return (
    <> 
      <div>
        <div>
          {/* <Sidebar/>
          <Header/> */}
          <Sdbar/>

        </div>

        <div>
          <section className={`bg-gray-50 -mt-1`}>
            
            <Planggan/>

          </section>

        </div>
      </div>
      
        {/* <div className='flex justify-end bg-marron text-white px-4 w-screen'>
          Ini Paling Bawah
        </div> */}
      
    </>
  )
}

export default Pelanggan