import { useContext } from 'react';
import { IoClose } from "react-icons/io5";

import { themeContext } from '../context/themeContext';
export default function Window({comp, className="", onClose, notClosable=false}){
    const[isLightTheme] = useContext(themeContext)
    return(
        <div 
            className={`${isLightTheme?'bg-white/5 inset-shadow-white ':'bg-gray-800/20 inset-shadow-white/12 shadow-black/30'}
            w-full mb-2 sm:mb-0
            backdrop-blur-[2px] relative rounded-xl shadow-md inset-shadow-sm inline-block sm:p-6 py-2 px-3 grow ${className}`}>
                {!notClosable &&<button onClick={onClose} className={`
                    ${isLightTheme?'text-stone-500':'text-gray-100'} 
                     absolute top-2 right-2 cursor-pointer`}>
                <IoClose size={20} />
                </button>}
                
            {comp}
            {console.log('loaded')}
        </div>
    )
}