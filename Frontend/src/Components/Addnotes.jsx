import axios from "axios";
import { useState, useEffect, useRef } from "react";

export function Addnotes({ fetchNotes, closeModal }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const titleInputRef = useRef(null);

    useEffect(() => {
        titleInputRef.current?.focus(); // Auto-focus the title input
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-6">Add a New Note</h2>
            <input
                type="text"
                placeholder="Title"
                className="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none text-black" // Added text-black
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={titleInputRef}
            />
            <textarea
                placeholder="Content"
                className="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none text-black" // Added text-black
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="flex justify-between">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    onClick={async () => {
                        await axios.post("http://localhost:3099/user/notes", {
                            Title: title,
                            Content: content
                        },
                        {
                            headers: {
                                Authorization: localStorage.getItem('token'),
                            },
                        })
                        .then((res) => {
                            console.log(res.data);
                            alert(res.data.msg);
                            fetchNotes();
                            closeModal(); // Close modal after adding note
                        })
                        .catch((err) => {
                            console.error(err);
                            alert("Error adding note");
                        });
                    }}
                >
                    Add Note
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={closeModal} // Close modal without adding
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
