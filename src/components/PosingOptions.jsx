import React from 'react'
import {PosingApi} from '../api/PosingAPI';
import PosingOption from './PosingOption'

function PosingOptions() {
  return (
    <div className='flex justify-between items-center p-6'>
        {PosingApi.map((category, index) => (
            <PosingOption 
            item={category}
            key={index}/>
        ))}
    </div>
  )
}

export default PosingOptions