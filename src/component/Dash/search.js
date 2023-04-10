// import React, {useState} from 'react'
// import { BiSearch } from 'react-icons/bi';

// function Search() {

//   const [open, setOpen] =  useState(false);
  
//   return (
//     <>
//       <div className='duration-300'>
//         <div>
//           <BiSearch size={'20'} className={`cursor-pointer ml-3`} onClick={()=> setOpen(!open)}/>
//         </div>
//         <div className={` ${open ? 'w-24' : null} `}>
//           <div className='border border-gray-200 rounded-full flex py-1 px-1 mt-1 items-center'>

//             <input type={'text'} className = 'rounded flex-1 ml-1 mr-16 focus:outline-none focus:ring focus:border-blue-500' placeholder = ' Search'/>
//             <button type='submit' className='md:-ml-14 mr-1 bg-gray-200 px-1 py-1 rounded-md hover:bg-green-100'>
//               <BiSearch/>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Search