
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Notes from './components/Notes'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([]);v

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (idx) => {
    const newNotes = notes.filter((_, i) => i !== idx);
    setNotes(newNotes);
  };

  return (
    <div className="h-screen bg-gray-100 p-6 flex flex-col">

      <h1 className="text-3xl font-bold text-center mb-4">
        Note Manager 📝
      </h1>

      <div className="flex justify-center mb-4">
        <Form addNote={addNote} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Notes notes={notes} deleteNote={deleteNote} />
      </div>

    </div>
  );
}
export default App
