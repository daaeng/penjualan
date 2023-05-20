import React from 'react'

export default function Labeldt (props) {
    
      return (
        <div className='bg-yellow-500 w-fit p-1 rounded-md -mt-5'>
            <h6>
                {props.title()}
            </h6> 
        </div>
      );
}