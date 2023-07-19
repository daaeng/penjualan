import React from 'react'
import Sdbar from '../component/Sidebar/sdbar'
import Merchain from '../component/MD/Merchain'

const MdMerhcain = () => {
  return (
    <>
      <div className='App-bgpage'>
        <div>
          
          <Sdbar/>

        </div>

        <div>
          <section className={`-mt-1`}>
            <Merchain/>
          </section>
        </div>
      </div>
    </>
  )
}

export default MdMerhcain