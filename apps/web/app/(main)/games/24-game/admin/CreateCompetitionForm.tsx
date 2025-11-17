"use client";

import { useState } from "react";

export default function CreateCompetitionForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const body = {
      name: formData.get("name"),
      description: formData.get("description"),
      puzzleCount: Number(formData.get("puzzleCount")),
      time: Number(formData.get("time")),
      durationDays: Number(formData.get("durationDays")),
      startDate: formData.get("startDate"),
    };

    await fetch("/api/24-game/competitions", {
      method: "POST",
      body: JSON.stringify(body),
    });

    setLoading(false);
    e.target.reset();
    window.location.reload();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 p-4 rounded-md"
    >
      <h2 className="font-semibold">Create Competition</h2>

      <input
        name="name"
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="puzzleCount"
        type="number"
        placeholder="Puzzle Count"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="time"
        type="number"
        placeholder="Time (minutes)"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="durationDays"
        type="number"
        placeholder="Duration (days)"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="startDate"
        type="datetime-local"
        className="w-full p-2 border rounded"
        required
      />

      <button
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? "Creating..." : "Create Competition"}
      </button>
    </form>
  );
}
