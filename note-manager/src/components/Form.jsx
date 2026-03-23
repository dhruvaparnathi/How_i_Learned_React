import React from "react";
import { useState } from "react";

const Form = ({addNote}) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!title || !content) return;

        addNote({
            title,
            content,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        });
        setTitle("");
        setContent("");
    }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Note Title"
        className="w-full mb-3 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
      />

      <textarea
        placeholder="Note Content..."
        className="w-full mb-3 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
        value={content}
        onChange={(e)=>{setContent(e.target.value)}}
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Note
      </button>
    </form>
  );
};

export default Form;
