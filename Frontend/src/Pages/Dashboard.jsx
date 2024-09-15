// Dashboard.jsx
import { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import axios from "axios";
import { Addnotes } from "../Components/Addnotes";

export function Dashboard() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found");
            return;
        }

        try {
            const res = await axios.get('http://localhost:3099/user/getnotes', {
                headers: {
                    Authorization: `${token}`,
                },
            });
            setData(res.data.notes);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-8 text-white">
            <div className="max-w-5xl mx-auto space-y-8">
                <button
                    className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-300"
                    onClick={() => setShowModal(true)}
                >
                    Add New Note
                </button>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> {/* Grid layout */}
                    {data.map((note, index) => (
                        <Card key={index} note={note} FetchNotes={fetchNotes} />
                    ))}
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                        <Addnotes fetchNotes={fetchNotes} closeModal={() => setShowModal(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}
