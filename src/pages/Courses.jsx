import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ code: "", title: "", unit: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addCourse = () => {
    setCourses([...courses, form]);
    setForm({ code: "", title: "", unit: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="page">
        <h2>Manage Courses</h2>
        <div className="form">
          <input name="code" placeholder="Course Code" value={form.code} onChange={handleChange} />
          <input name="title" placeholder="Course Title" value={form.title} onChange={handleChange} />
          <input name="unit" placeholder="Unit" value={form.unit} onChange={handleChange} />
          <button onClick={addCourse}>Add</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Title</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={i}>
                <td>{c.code}</td>
                <td>{c.title}</td>
                <td>{c.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
