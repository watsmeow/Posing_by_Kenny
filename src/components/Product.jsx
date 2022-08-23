import React from 'react';

function Product({item}) {
  return (
    <div className='flex items-center justify-center overflow-hidden rounded-md shadow-lg m-2 relative'>
        <img 
        src={item.src} 
        alt="product" 
        className="w-[350px] h-[300px] object-cover"/>
        <div className='flex items-end justify-center w-[100%] h-[100%] absolute'>
            <button className='btn m-5'>{item.title}</button>
        </div>
    </div>
  )
}

export default Product