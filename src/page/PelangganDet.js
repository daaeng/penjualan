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
          <section className={`bg-marron max-h-128`}>
            
              Pelanggan Detail

          </section>

        </div>
      </div>
      
      
    </>
  )
}

export default Pelanggan