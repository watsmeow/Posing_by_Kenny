import React from 'react';
import { Instagram } from "@material-ui/icons";

function Footer() {
  return (
    <div className='flex items-center justify-center flex-col bg-light-grey shadow-md relative z-10 p-6 font-bold'>
        <h3>Follow Kenny on Instagram</h3>
        <Instagram className='m-2 cursor-pointer'/>
        <p>Copyright PosingbyKenny</p>
    </div>
  )
}

export default Footer