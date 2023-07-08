import React from 'react'
import { SearchProps } from './interfaces/interface'

function Search({isChecked,setWord}:SearchProps) {

    let dark = isChecked ? 'bg-[#1F1F1F]' : 'bg-[#F5F5F5]';
   
  return (
    <div
    className='relative grid mt-14'
    >
       <input type="text" className={`ps-6 pe-6 py-4 px-6 rounded-xl border-0 ${dark}`} placeholder='Find Word' onChange={(e) => setWord(e.target.value)} /> 
        <label className='absolute grid place-items-center top-0 bottom-0 right-2'>
            <button className='bg-transperent border-0 p-5 cursor-pointer' >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
            </button>
        </label>
    </div>
  )
}

export default Search