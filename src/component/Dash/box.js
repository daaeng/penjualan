import React, {} from 'react'
import Box2 from './box2'
import Labeldt from '../backpage/label'
import TempCG from '../Salles/TempCG'
import ChartSales from '../chart/ChartSales'
import FilTime from '../backpage/FilTime'

function Box () {
  
  const title = () => {
    return ("Grafik Sales")
  }
  
  const isibox = () => {
    return (
      <>
        <ChartSales/>
      </>
    )
  }

  return (
    <>
      <div className='flex justify-center mt-4'>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 w-full'>

          <div className='sm:col-span-2 md:col-span-2 lg:col-span-1 h-fit'>
            <TempCG/>
          </div>

          <div className='sm:mt-2 sm:col-span-2 md:mt-3 md:col-span-2 lg:-mt-2 lg:row-span-2 lg:col-span-2 p-2 mb-3'>
            <div className='bg-marron shadow-md lg:p-3 md:p-2 sm:p-1 rounded-md w-full '>
              <Labeldt title = {title} />

              <div>
              <div className='flex justify-end items-center font-mono text-black -mt-5 -mb-2 mr-2'>
                  <FilTime/>
              </div>
            </div>

              <Box2 isibox = {isibox}/>
            </div>
          </div>

        </div>

      </div>
        
    </>
  )
}

export default Box


              

