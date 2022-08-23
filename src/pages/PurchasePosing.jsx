import React from 'react';
import FTWALogos from '../assets/img/FTWALogos.png'

function PurchasePosing() {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-1 items-center justify-center'>
            <img src={FTWALogos} 
            alt=""
            className='h-[70%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-200' />
        </div>
        <div className='flex-[1.3] flex items-center justify-center flex-col'>
            <h1 className='title text-[40px] font-bold'>Product Title</h1>
            <p className='text-justify mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3 className='mt-7 text-3xl'>Price: <b>$75.00 – $380.00</b></h3>
            <div className='mt-7 text-2xl'>
            Select Option: 
                <select className='ml-5 border-2'>
                    <option select disabled>Select</option>
                    <option value="">Three 30 Minute Sessions</option>
                    <option value="">One 30 Minute Session</option>
                    <option value="">Six 30 Minute Sessions</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default PurchasePosing
