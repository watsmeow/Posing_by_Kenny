import React from 'react';
import {ApparelApi} from '../api/AparelAPI';
import ApparelOption from './ApparelOption'

function ApparelOptions() {
    return (
        <div className='flex justify-between items-center p-6'>
            {ApparelApi.map((category, index) => (
                <ApparelOption 
                item={category}
                key={index}/>
            ))}
        </div>
      )
}

export default ApparelOptions