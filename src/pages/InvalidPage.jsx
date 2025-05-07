import { Link } from 'react-router-dom';
import { themeContext } from '../context/themeContext';
import { useContext } from 'react';
export default function InvalidPage(){
    const[isLightTheme] = useContext(themeContext)
    return(
        <main className={`${isLightTheme?'bg-stone-200 text-gray-900':'bg-slate-700 text-stone-200'} grow flex justify-center align-center`}>
            <div className=" self-center flex flex-col justify-center items-center">
                
                <h2 className="text-5xl">❌ No page found ❌</h2>
                <p className='text-xl my-5'>Being a smartass 🧐😎, are we?</p>
                <p>you can visit any of the pages below</p>
                
                    <Link to='/'>➡️Home</Link>
                    <Link to='/about'>➡️About</Link>
                </div>
        </main>
    )
}