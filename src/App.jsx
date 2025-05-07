import { Routes, Route } from 'react-router-dom';
// import { useContext } from 'react';
import { TbMoon,TbSun } from "react-icons/tb";import { AiOutlineMenu } from "react-icons/ai";

import { themeContext } from './context/themeContext';
import Sidebar from "./components/Sidebar"
import Home from './pages/Home';
import About from './pages/About';
import InvalidPage from './pages/InvalidPage';
import { useEffect, useState } from 'react';

function App() {
  const [isLightTheme, setisLightTheme] = useState(true);
  const [sidebaropen, setsidebaropen] = useState(true)

  const initialUser = {
                        name:`Rohan Basu`,
                        phone: `9577403756`,
                        location:`Jalpaiguri`
                      }

  const [user, setuser] = useState(initialUser)
  
  return (
    <themeContext.Provider value={[isLightTheme]}>
      <div className={`${isLightTheme?'bg-stone-200 text-gray-900':'bg-slate-700 text-stone-200'} flex h-screen item-stretch relative`}>


        <button 
        className={`text-2xl flex items-center justify-center z-10 cursor-pointer rounded-full size-10 absolute left-2 top-2 ${isLightTheme?`bg-white shadow-xl text-gray-900`:`bg-gray-800 text-gray-200`}`}
        onClick={()=>setsidebaropen(true)}
        >
          <AiOutlineMenu />
        </button>


        <button className={`text-2xl flex items-center justify-center z-10 cursor-pointer rounded-full size-8 absolute right-5 bottom-5 ${isLightTheme?`bg-slate-900 text-stone-200`:`bg-stone-300 text-slate-900`}`} onClick={()=>setisLightTheme(prev=>!prev)}>
          {isLightTheme?<TbMoon />:<TbSun />}
          </button>
        
          <Sidebar isopen={sidebaropen} open={setsidebaropen}/>
          
          <Routes>
            <Route path="/" element={<Home user={user}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<InvalidPage/>} />
          </Routes>

      </div>
    </themeContext.Provider>
  )
}

export default App
