"use client";

import { useEffect, useState } from "react";

const CompetitionList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/24-game/competitions?page=1&limit=100");
      const data = await res.json();
      setList(data.competitions || []);
    }
    load();
  }, []);

  async function deleteCompetition(id: string) {
    if (!confirm("Delete this competition?")) return;

    await fetch(`/api/24-game/competitions/${id}`, {
      method: "DELETE",
    });

    setList(list.filter((c: any) => c._id !== id));
  }

  return (
    <div>
      <h2 className="font-semibold mb-4">Competitions</h2>

      <ul className="space-y-3">
        {list.map((c: any) => (
          <li
            key={c._id}
            className="p-4 bg-gray-50 border rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{c.name}</h3>
              <p className="text-sm text-gray-600">{c.description}</p>
              <p className="text-xs mt-1">
                Puzzles: {c.puzzleIds.length} | Ends: {c.endDate.slice(0, 10)}
              </p>
            </div>

            <button
              onClick={() => deleteCompetition(c._id)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitionList;
