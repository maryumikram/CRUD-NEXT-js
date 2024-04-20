"use client";

import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const response = await fetch(
        `http://localhost:3001/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
