import React from 'react'
import Header from '../component/Header/header'
import Sidebar from '../component/Sidebar/sidebar'

const Dpembayaran = () => {
  return (
    <div>
        <div>
          <Sidebar/>
          <Header/>

        </div>

        <div>
          <section className={`bg-marron max-h-128`}>
            <div className={`ml-48 mb-4`}>
              <h2 className='font-mono text-white'>Pembayaran</h2>
              
            </div>

          </section>
        </div>
      </div>
  )
}

export default Dpembayaran