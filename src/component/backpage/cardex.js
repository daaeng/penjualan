import React from 'react'

export default function Cardex (props) {
    
    return (
        <>
            <div className='bg-white w-full p-1 rounded-md '>
                <div>
                    {props.cardex()}
                </div> 
            </div>
        </>
      );
}