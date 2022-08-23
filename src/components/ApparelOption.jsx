import React from 'react'

function ApparelOption({item}) {
    const header2 = 'text-[25px] font-bold';
    const paragraph = 'text-[15px]';
    const header3 = 'text-[20px]'
    const divs = 'flex flex-col items-center justify-center w-[100%] h-[100%]'

  return (
    <div className='mt-3 mb-3'>
      <div className={divs}>
        <h2 className={header2}>{item.content.h2}</h2>           
      </div>
      <div className='flex items-center justify-center overflow-hidden rounded-md shadow-lg m-2'>
        <img 
        src={item.src} 
        alt="product" className="w-[400px] h-[300px] object-cover cursor-pointer"/>
      </div>
      <div className={divs}>
        <h3 className={header3}>{item.content.h3}</h3>
        <button className='btn'>Select Options</button>              
      </div>
    </div>
  )
}

export default ApparelOption