import { useState, useContext, useEffect } from 'react';
import TodoCard from './TodoCard';
import { themeContext } from '../context/themeContext';

export default function TodoList() {
  const [isLightTheme] = useContext(themeContext);

  const loadNotes = () => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  };

  const [currentNote, setcurrentNote] = useState('');
  const [Notes, setNotes] = useState(loadNotes);

  const addNote = (data) => {  
    if (data && data !== '') {
      const newNote = {
        content: data,
        timestamp: Date.now(),
        isDone: false
      };
      setNotes((prev) => [newNote, ...prev]);
      setcurrentNote('');
    }
  };

  const [doneCounter, setdoneCounter] = useState(0);

  // Update Notes in localStorage whenever Notes change
  useEffect(() => {
    const doneValue = Notes.filter(note => note.isDone === false).length;
    setdoneCounter(doneValue);

    // Save updated Notes to localStorage whenever Notes change
    localStorage.setItem('todos', JSON.stringify(Notes));
  }, [Notes]);

  // Handle marking todo as done/undone
  const toggleDone = (timestamp) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.timestamp === timestamp ? { ...note, isDone: !note.isDone } : note
      )
    );
  };

  return (
    <div>
      {Notes.length > 0 ? (
        <div>
          <h3 className="text-xl font-semibold pb-3 flex gap-2">
            There {doneCounter > 1 ? 'are' : 'is'} {doneCounter === 0 ? 'no' : `${doneCounter} `}
            thing{doneCounter > 1 && 's'} you need to do! {doneCounter > 15 ? '😨' : doneCounter > 6 ? '😅' : doneCounter === 0 ? '😀' : '🫡'}
          </h3>

          <div className="max-h-35 overflow-y-auto no-scrollbar">
            {Notes.map((note) => 
              <TodoCard key={note.timestamp} note={note} setNotes={setNotes} toggleDone={toggleDone} />
            )}
          </div>
        </div>
      ) : (
        <p className="text-center opacity-40 font-semibold text-3xl">Add Todos to remember</p>
      )}

      <div className="mt-4 flex">
        <input
          className="w-full border rounded-full outline-none px-5 py-1"
          type="text"
          onChange={(e) => setcurrentNote(e.target.value)}
          value={currentNote}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addNote(currentNote);
            }
          }}
        />
      </div>
    </div>
  );
}
