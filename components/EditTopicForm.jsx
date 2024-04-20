'use client'

import { useState } from "react"

export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    newTitle,
                    newDescription
                }),
            });
            if (res.ok) {
                window.location.href = "/";
            } else {
                throw new Error("Failed to update a topic");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
            />
            <input
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
            />
            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
                Update Topic
            </button>
        </form>
    )
}
