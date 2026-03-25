import React from 'react'
import Card from './Card';


const Notes = ({notes,deleteNote}) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-8">
      {notes.map((note, index) => (
            <Card
            key={index}
            note={note}
            onDelete={()=>deleteNote(index)}
        />
      ))}
    </div>
  );
}

export default Notes
