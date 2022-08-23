import React from 'react';
import {ApiTopProduct} from '../api/TopProducts'
import Product from './Product'

function Products() {
  return (
    <div>
        <div className='flex justify-center'>
           <h2 className='text-[25px] font-bold'>Customer Favorites</h2> 
        </div>
        
        <div className='flex flex-1 flex-wrap p-5 items-center justify-center'>        
            {ApiTopProduct.map((product, index) => (
                <Product 
                item={product} 
                key={index} />
                ))
            }
        </div>

    </div>
  )
}

export default Products