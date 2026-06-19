import React, { useState } from "react";
import "./App.css";

function App() {
  const [assignments, setAssignments] = useState([
    {
      subject: "Physics",
      title: "Wave Motion Assignment",
      dueDate: "2026-06-20",
      status: "Pending",
    },
  ]);

  const [form, setForm] = useState({
    subject: "",
    title: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addAssignment = () => {
    if (!form.subject || !form.title || !form.dueDate) {
      alert("Please fill all fields");
      return;
    }

    setAssignments([...assignments, form]);

    setForm({
      subject: "",
      title: "",
      dueDate: "",
      status: "Pending",
    });
  };

  return (
    <div className="container">
      <h1>College Assignment Submission Tracker</h1>

      <div className="form">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />

        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>Submitted</option>
          <option>Late Submission</option>
        </select>

        <button onClick={addAssignment}>Add Assignment</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assignment Title</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.title}</td>
              <td>{item.dueDate}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;