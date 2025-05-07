import { useEffect, useState, useContext } from 'react';
import { themeContext } from '../context/themeContext';
import { MdDeleteForever  } from "react-icons/md";

export default function TodoCard({note, setNotes}){
    const[isLightTheme] = useContext(themeContext);
    const [open, setopen] = useState(false)

    const markDone = (currentNoteID)=>{
        setNotes(prev =>
            prev.map(note=>
                note.timestamp===currentNoteID?{...note, isDone:!note.isDone}: note
            )
        )
    }


    const removeNote= (currentNoteID)=>{
        console.log(currentNoteID);
        console.log(currentNoteID);
    setNotes(prev =>
        prev.filter(prevnote => prevnote.timestamp !== currentNoteID)
    );
    }


    return(
        <div 
        onClick={()=>setopen(prev=>!prev)} 
        className={`
            border-b border-[#8886] py-2 cursor-pointer flex gap-2  relative`}
        >
        <input className={`${isLightTheme? 'accent-gray-600':'accent-stone-400'} min-w-5 `} type="checkbox" 
        onClick={(e)=>{
            markDone(note.timestamp)
            e.stopPropagation()
            }}
        checked={note.isDone}
        /> 
        <p className={`max-w-[calc(100%-60px)] ${note.isDone&& 'line-through opacity-50'} ${note.isDone?'truncate':!open&&'truncate'}`}>{note.content}</p>
        <button 
        className={`${isLightTheme?'border-gray-700 text-gray-700':'border-stone-400 text-stone-400'} cursor-pointer top-1.5 absolute right-0 z-1 border  text-xl p-1 rounded-full hover:bg-red-400 hover:border-red-400 hover:text-stone-200`}
        aria-label="Delete Note"
        onClick={(e) => {
            e.stopPropagation();
            removeNote(note.timestamp);
            }}
        >
            <MdDeleteForever />
        </button>
        </div>
    )
}