import React from 'react'
import Sdbar from '../component/Sidebar/sdbar'
import Grosir from '../component/Grosir/Grosir'

const Ggrosir = () => {
  return (
    <>

      <div>
          <div>
          
          <Sdbar/>

          </div>

          <div>
          <section className={`bg-gray-50 -mt-1`}>
              
              <Grosir/>

          </section>
          </div>
      </div>
        

    </>
  )
}

export default Ggrosir