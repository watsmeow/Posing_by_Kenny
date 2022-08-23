import { useState, React } from 'react';
import { Close } from '@material-ui/icons'; 

const Announce = () => {
    const handleClose = () => {
        setAnnounceStyle(announceStyle + " hidden")
    }
    const[announceStyle, setAnnounceStyle] = useState('bg-light-grey font-bold text-black flex items-center justify-center p-[10px]')
  return (
    <div className={announceStyle}>
        <h2>Don't forget to check out the Dead Center apparel!</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce