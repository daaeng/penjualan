import React from 'react'
import { Card } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { BsShop } from "react-icons/bs";
import { MdPayments } from "react-icons/md";

function Dashboard() {
  
  return (

    <>

      
      <div className='px-14 flex-1 pt-14 ml-5'>

        <div className='border border-gray-200  rounded w-full flex py-3 px-3 items-center'>
          <BiSearch/>
          <input type={'text'} className = 'flex-1' placeholder = 'Search'/>
        </div>
        
        <div className='px-10 flex-1 pt-10 ml-5'>
          

        </div>

      </div>

        
    </>
    
  )
}

// function Card(props){
//   return(
//     <div
//       className= {`rounded-xl bg-${props.bgColor} bg-opacity-10 p-5 w-32 text-${props.txtColor}`}>
//         {props.icon}
//         <span className='text-sm'>
//           {props.label}
//         </span>
//     </div>
//   );
// }

export default Dashboard;