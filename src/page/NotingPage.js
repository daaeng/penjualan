import React from 'react'
import Sdbar from '../component/Sidebar/sdbar';

function NotingPage() {
  
  return (

    <> 
      <div>
        <div>
          
          <Sdbar/>

        </div>

        <div>
          <section className={`bg-gray-800 -mt-20 h-screen w-screen text-white`}>

            <div className='App'>
              <header className='App-header'>
                
                <div className='font-light text-6xl'>
                  ERROR 404 
                </div>
                <div className='text-4xl font-sans'>
                  Page Not Found
                </div>

              </header>
            </div>
            
          </section>
        </div>
      </div>
      
    </>
    
  )
}

export default NotingPage;