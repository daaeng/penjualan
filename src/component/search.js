import React from 'react'
import { BiSearch } from 'react-icons/bi';

function Search() {
  return (
    <div className='border border-gray-200  rounded w-full flex py-3 px-3 items-center'>
        <BiSearch/>
        <input type={'text'} className = 'flex-1' placeholder = 'Search'/>
    </div>
  )
}

export default Search