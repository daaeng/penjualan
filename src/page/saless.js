import React from 'react'
import Sdbar from '../component/Sidebar/sdbar'
import Sales from '../component/Salles/sales'

const Psale = () => {
  return (
    <> 
      <div>
        <div>

          <Sdbar/>

        </div>

        <div>
          <section className={`bg-gray-50 -mt-1`}>
            
            <Sales/>

          </section>

        </div>
      </div>
      
    </>
  )
}

export default Psale