import React from 'react';
import { Badge} from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

function Nav() {
    const style = 'cursor-pointer ml-[25px]'
  return (
    <div className='navbar h-[60ox] shadow-md relative z-10'>
        <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
            {/* left portion of nav */}
            <div className='left flex flex-1 items-center'>
                <div className='language cursor-pointer text-[16px]'>EN</div>

                <div className='searchInput flex border-[2px] border-solid border-darkgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#B5362E] transition-all'>
                    <input 
                    className='input outline-none' 
                    type="text" />
                    <Search/>
                </div>
            </div>
            {/* logo */}
            <div className='flex-1 center text-center'>
                <div className='logo font-bold text-2xl'>Posing by Kenny</div>
            </div>
            {/* right portion of nav */}
            <div className='right flex flex-1 items-center justify-end'>
                <div className={style}>Register</div>
                <div className={style}>Log In</div>
                <div className={style}>
                    <Badge badgeContent={2} color='secondary'>
                        <ShoppingCartOutlined/>
                    </Badge>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav