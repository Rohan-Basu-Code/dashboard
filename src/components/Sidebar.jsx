import { NavLink } from 'react-router-dom';
import { themeContext } from '../context/themeContext';
import { useContext } from 'react';
import { IoClose } from "react-icons/io5";

export default function Sidebar({isopen,open}){
    const[isLightTheme] = useContext(themeContext)
    return(
        <aside className={`${isopen? 'block':'hidden'} absolute top-0 bottom-0 min-w-3/5 sm:static z-30 bg-gray-800 flex flex-col md:min-w-1/6`}>
            <button 
            className='self-end p-3 text-gray-200'
            onClick={()=>open(false)}
            >
                <IoClose size={30} />
            </button>
           <NavLink
           className={({ isActive }) => `duration-300 ease-in
            z-2 relative py-2 border-l-5 border-red-500
            ${isActive ? 'px-6' : 'px-3 hover:px-6'}
            ${isActive&&isLightTheme ? 'text-gray-800' : 'text-stone-200'} 
            before:absolute before:-z-1 before:top-0 before:bottom-0 before:left-0 
            ${isLightTheme?'before:bg-stone-200':'before:bg-slate-700'} 
            before:transition-[right] before:duration-100 before:ease-in 
            ${isActive ? 'before:right-0' : 'before:right-[calc(100%)] hover:before:right-[calc(100%-5px)]'}`} 
            to='/'>Home</NavLink>

           <NavLink
           className={({ isActive }) => `duration-300 ease-in
            z-2 relative py-2 border-l-5 border-yellow-500
            ${isActive ? 'px-6' : 'px-3 hover:px-6'}
            ${isActive&&isLightTheme ? 'text-gray-800' : 'text-stone-200'} 
            before:absolute before:-z-1 before:top-0 before:bottom-0 before:left-0 
            ${isLightTheme?'before:bg-stone-200':'before:bg-slate-700'} 
            before:transition-[right] before:duration-100 before:ease-in 
            ${isActive ? 'before:right-0' : 'before:right-[calc(100%)] hover:before:right-[calc(100%-5px)]'}`}  
            to='/about'>About</NavLink>
        </aside>
    )
}