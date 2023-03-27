import React from 'react'
import { BiSearch } from 'react-icons/bi';

function Search() {
  return (
    <div className='border border-gray-200 rounded-full w-full flex py-1 px-1 mt-1 items-center'>
<<<<<<< HEAD

        <input type={'text'} className = 'rounded flex-1 ml-1 mr-16 focus:outline-none focus:ring focus:border-blue-500' placeholder = ' Search'/>
        <button type='submit' className='md:-ml-14 mr-1 bg-gray-200 px-1 py-1 rounded-md hover:bg-green-100'>
          <BiSearch/>
        </button>
=======
        <BiSearch/>
        <input type={'text'} className = 'rounded flex-1 ml-1 mr-16 focus:outline-none focus:ring focus:border-blue-500' placeholder = ' Search'/>
        <button type='submit' className='md:-ml-14 mr-1 bg-gray-200 px-1 rounded-md hover:bg-green-100'>Search</button>
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066
    </div>
  )
}

export default Search