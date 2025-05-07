import { themeContext } from '../context/themeContext';
import { useContext, useEffect, useState } from 'react';

import bg_light from './light_bg.png'
import bg_dark from './dark_bg.png'

import Window from '../components/Window';
import Welcome from '../components/Welcome';
import Weather from '../components/Weather';
import Quote from '../components/Quote';
import Text from '../components/text';
import TodoList from '../components/TodoList';


export default function Home({user}){
    const[isLightTheme] = useContext(themeContext)

    const [windowsVisible, setWindowsVisible] = useState({
        welcome: true,
        weather: true,
        quote: true,
        text: true,
        todo: true
    });

    const handleError = (windowName) => {
        setWindowsVisible(prev => ({ ...prev, [windowName]: false }));
        };

  const handleClose = (windowName) => {
    setWindowsVisible((prevState) => ({
      ...prevState,
      [windowName]: false
    }));
  };
    return(
        <main
        style={{
        backgroundImage: `url(${isLightTheme?bg_light:bg_dark})`
      }} 
        className={`grow px-2 pt-14 py-3 sm:p-3 md:p-5 bg-contain h-full overflow-y-auto`}
        >
            <div className='sm:grid sm:max-md:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-1 sm:gap-3'>
                
                {windowsVisible.welcome && (
                <Window 
                    className="md:col-span-2" 
                    comp={<Welcome name={user?.name} />} 
                    onClose={() => handleClose('welcome')}
                    notClosable={true}
                />
                )}

                {windowsVisible.weather && (
                <Window 
                    // className="self-start" 
                    comp={<Weather location={user?.location} errorHandle = {handleError}/>} 
                    onClose={() => handleClose('weather')} 
                />
                )}

                {windowsVisible.quote && (
                <Window 
                    comp={<Quote errorHandle = {handleError}/>} 
                    onClose={() => handleClose('quote')} 
                    
                />
                )}

                {windowsVisible.todo && (
                <Window 
                    className="md:col-span-2" 
                    comp={<TodoList/>} 
                    onClose={() => handleClose('todo')} 
                    notClosable={true}
                />
                )}

                {windowsVisible.text && (
                <Window 
                    comp={<Text />} 
                    onClose={() => handleClose('text')} 
                />
                )}

                
                
            </div>
            
        </main>
    )
}