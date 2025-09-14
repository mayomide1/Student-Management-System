import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Students.css";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", matric: "", dept: "", level: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addStudent = () => {
    setStudents([...students, form]);
    setForm({ name: "", matric: "", dept: "", level: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="page">
        <h2>Manage Students</h2>
        <div className="form">
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input name="matric" placeholder="Matric No" value={form.matric} onChange={handleChange} />
          <input name="dept" placeholder="Department" value={form.dept} onChange={handleChange} />
          <input name="level" placeholder="Level" value={form.level} onChange={handleChange} />
          <button onClick={addStudent}>Add</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Matric No</th>
              <th>Name</th>
              <th>Department</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td>{s.matric}</td>
                <td>{s.name}</td>
                <td>{s.dept}</td>
                <td>{s.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
