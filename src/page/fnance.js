import React from 'react'
import Sdbar from '../component/Sidebar/sdbar'
import Finance from '../component/FinanceP/finance'

const Fnance = () => {
  return (
    <>

      <div className='App-bgpage'>
          <div>
          
            <Sdbar/>

          </div>

          <div>
          <section className={`-mt-1`}>
              
              <Finance/>

          </section>
          </div>
      </div>
        

    </>
  )
}

export default Fnance