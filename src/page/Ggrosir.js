import React from 'react'
import Sdbar from '../component/Sidebar/sdbar'
import Grosir from '../component/Grosir/Grosir'

const Ggrosir = () => {
  return (
    <>

      <div className='App-bgpage'>
          <div>
          
          <Sdbar/>

          </div>

          <div>
          <section className={`-mt-1`}>
              
              <Grosir/>

          </section>
          </div>
      </div>
        

    </>
  )
}

export default Ggrosir