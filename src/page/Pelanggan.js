import React from 'react'
import Header from '../component/Header/header'
import Planggan from '../component/Plang/planggan'
import Sidebar from '../component/Sidebar/sidebar'

const Pelanggan = () => {
  return (
    <> 
      <div>
        <div>
          <Sidebar/>
          <Header/>

        </div>

        <div>
          <section className={`bg-marron max-h-128`}>
            
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