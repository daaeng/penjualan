import React from 'react'
import Sdbar from '../component/Sidebar/sdbar'
import Merchain from '../component/MD/Merchain'

const MdMerhcain = () => {
  return (
    <>
      <div>
        <div>
          
          <Sdbar/>

        </div>

        <div>
          <section className={`bg-gray-50 -mt-1`}>
            <Merchain/>
          </section>
        </div>
      </div>
    </>
  )
}

export default MdMerhcain