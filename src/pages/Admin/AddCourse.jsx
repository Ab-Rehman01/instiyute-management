import { useState } from "react";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = { title, description, duration };
    const response = await fetch("http://localhost:5000/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    });
    if (response.ok) alert("Course added successfully");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Add New Course</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input className="border p-2 w-full my-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border p-2 w-full my-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className="border p-2 w-full my-2" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 mt-4" type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
