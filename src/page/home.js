import React from 'react'
import Sdbar from '../component/Sidebar/sdbar'
import Homepg from '../component/homep/homepg'

const Home = () => {
  return (
    <>

      <div>
          <div>
          
            <Sdbar/>

          </div>

          <div>
          <section className={`bg-gray-50 -mt-1`}>
              
              <Homepg/>

          </section>
          </div>
      </div>
        

    </>
  )
}

export default Home