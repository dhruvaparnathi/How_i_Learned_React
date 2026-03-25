import React from "react";
import { Trash2 } from "lucide-react";

const Card = ({ note, onDelete }) => {
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);
  return (
    <div  style={{ backgroundColor: `rgb(${c1}, ${c2}, ${c3})` }} className="relative rounded-2xl p-5 shadow-md w-72 
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="mb-3 border-b border-black/20 pb-2">
        <p className="text-xs text-gray-700">{note.date}</p>
        <h3 className="text-lg font-bold text-gray-800">
          {note.title}
        </h3>
      </div>

      <p className="text-sm text-gray-800 mb-5 leading-relaxed">
        {note.content}
      </p>

      <div className="flex justify-between items-center text-xs text-gray-700">
        <span>🕒 {note.time}</span>

        <button
          onClick={onDelete}
          className="p-2 rounded-full bg-black text-white hover:bg-red-500 transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default Card;