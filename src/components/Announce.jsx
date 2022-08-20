import { useState, React } from 'react';
import { Close } from '@material-ui/icons'; 

const Announce = () => {
    const handleClose = () => {
        setAnnounceStyle(announceStyle + " hidden")
    }
    const[announceStyle, setAnnounceStyle] = useState('bg-[#B5362E] font-bold text-white flex items-center justify-center p-[10px]')
  return (
    <div className={announceStyle}>
        <h2>End of Summer Sale!</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce