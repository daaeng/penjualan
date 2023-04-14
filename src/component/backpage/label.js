import React from 'react'

export default function Labeldt (props) {
    
      return (
        <div className='bg-red-300 w-32 p-1 rounded-md -mt-5'>
            <h6>
                {props.title()}
            </h6> 
        </div>
      );
}

// constructor(props) {
//     super(props);
//     this.state = {title: "Data"};
//   }