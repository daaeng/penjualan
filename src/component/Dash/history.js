import React from 'react'
import Labeldt from '../backpage/label'
import Cardex from '../backpage/cardex'

function History() {
    const title = () => {
        return ("History Transaction")
    }
    
    const cardex = () => {
        return ("Data History Transaction")
    }
    
    return(
        <>
            <div className='flex p-1 ml-1 mr-1'>
                <div className='w-full p-2 bg-marron '>
                    <div className='mb-1'>
                        <Labeldt title = {title} />
                    </div>
                    <Cardex cardex = {cardex}/>
                </div>
            </div>
        </>
    )
}

export default History