import { useState } from 'react';
import axios from 'axios';
import { FaPen, FaSave, FaTimes } from 'react-icons/fa';

export function Card({ note, FetchNotes }) {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(note.Content);

    const handleSave = async () => {
        try {
            // Send a PUT request to update the note
            await axios.put('http://localhost:3099/user/update', { Title: note.Title, Content: content }, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
            });

            setIsEditing(false); // Exit edit mode
            FetchNotes(); // Refresh notes after update
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg flex flex-col justify-between h-auto mb-4"> {/* Removed complex styles */}
            {isEditing ? (
                <div>
                    <h1 className="text-xl font-bold mb-2">{note.Title}</h1>
                    <textarea
                        className="w-full p-2 rounded bg-gray-200 text-black mb-4 resize-none h-32"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <div className="flex justify-end space-x-2">
                        <button
                            className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition"
                            onClick={handleSave}
                        >
                            <FaSave />
                        </button>
                        <button
                            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition"
                            onClick={() => setIsEditing(false)}
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-xl font-bold mb-2 truncate">{note.Title}</h1>
                    <p className="text-gray-700 mb-4">{note.Content}</p>
                    <div className="flex justify-end">
                        <button
                            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
                            onClick={() => setIsEditing(true)}
                        >
                            <FaPen />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
