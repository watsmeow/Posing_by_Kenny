import React from 'react';

const Category = ({item}) => {

  return (<div className='flex-1 m-4 shadow-lg rounded-md overflow-hidden relative max-h-[300px]'>
      <img src={item.src} className="min-h-[300px] min-w-[413px] object-cover" alt='category_img'/>
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <buttton className='btn text-[24px]'>{item.title}</buttton>
      </div>
  </div>)
};

export default Category;