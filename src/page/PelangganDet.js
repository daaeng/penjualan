import React from 'react'
import Header from '../component/Header/header'
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
          <section className={`bg-gray-50 -mt-1`}>
            
              Pelanggan Detail

          </section>

        </div>
      </div>
      
    </>
  )
}

export default Pelanggan