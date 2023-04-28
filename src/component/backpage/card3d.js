import React from 'react'

export default function Card3D (props) {
    
      return (
        <>
            <div className='bg-blue-100 p-2 sm:col-span-2 md:col-span-2 lg:col-span-1 rounded-md'>
                {props.titleCard()}
            </div>         
        </>
      );
}