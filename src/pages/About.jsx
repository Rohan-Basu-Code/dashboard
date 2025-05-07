import { themeContext } from '../context/themeContext';
import { useContext } from 'react';import { MdOutlineMail } from "react-icons/md";import { MdOutlineLocalPhone } from "react-icons/md";

export default function About(){

    const[isLightTheme] = useContext(themeContext)

    return(
        <main className={`grow p-5  ${isLightTheme?'bg-stone-200 text-gray-900':'bg-slate-700 text-stone-200'} overflow-y-auto `}>
        <h2 className='underline text-center text-4xl font-semibold mb-12'>About Me</h2>
        <div className='max-w-[80ch]'>
            <h1 className='text-5xl font-semibold mb-5'>Rohan Basu</h1>
            <div className='mt-8'>
                <h3 className='text-3xl font-semibold mb-2'>Contact</h3>
                <div className='flex gap-5 flex-wrap'>
                    <div className='flex items-center'><MdOutlineMail size={26}/> ruhBasu@proton.me</div>
                    <div className='flex'><MdOutlineLocalPhone size={26}/> +91 9577403756</div>
                </div>
            </div>

            <div className='mt-8'>
                <h3 className='text-3xl font-semibold mb-2'>Projects</h3>
                <div className='flex w-[max-content] flex-col flex-wrap'>
                    <a className='duration-100 hover:translate-x-2 border-b-2 pb-1 mb-2 border-dotted font-semibold' target="_blank" href="https://github.com/Rohan-Basu-Code/writer">Writer</a>
                    <a  className='duration-100 hover:translate-x-2 border-b-2 pb-1 mb-2 border-dotted font-semibold' target="_blank"  href="https://github.com/Rohan-Basu-Code/dashboard_git">Dashboard</a>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='text-3xl font-semibold mb-2'>Professional Summary</h3>
                <p>
                    Motivated and results-driven IT professional with over 8 years of diverse experience in web development, digital advertising operations, quality assurance, and customer support. Skilled in front-end development using JavaScript, HTML, CSS, and React. Experienced with Google Ad Manager and Hulu for digital advertisement operations. Proven communication skills from voice and email support experience. Fluent in English, Hindi, and Bengali.
                </p>
            </div>
            <div className='mt-8'>
                <h3 className='text-3xl font-semibold mb-2'>Technical Skills</h3>
                <div className='flex flex-col flex-wrap'>
                    <div className='flex gap-2'><span className='font-semibold'>Programming Languages: </span>JavaScript, HTML, CSS</div>
                    <div className='flex gap-2'>
                        <span className='font-semibold'>Frameworks & Libraries:</span>
                        React</div>
                    <div className='flex gap-2'>
                        <span className='font-semibold'>Languages:</span>
                        English, Hindi, Bengali</div>
                </div>
            </div> 
        
        
                    
                

        </div>
        



        </main>
    )
}