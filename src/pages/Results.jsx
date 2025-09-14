import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Results.css";

const Results = () => {
  const [results, setResults] = useState([]);
  const [form, setForm] = useState({ matric: "", course: "", score: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addResult = () => {
    const grade = getGrade(parseInt(form.score));
    setResults([...results, { ...form, grade }]);
    setForm({ matric: "", course: "", score: "" });
  };

  const getGrade = (score) => {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 45) return "D";
    if (score >= 40) return "E";
    return "F";
  };

  return (
    <div>
      <Navbar />
      <div className="page">
        <h2>Upload Results</h2>
        <div className="form">
          <input name="matric" placeholder="Matric No" value={form.matric} onChange={handleChange} />
          <input name="course" placeholder="Course Code" value={form.course} onChange={handleChange} />
          <input name="score" placeholder="Score" value={form.score} onChange={handleChange} />
          <button onClick={addResult}>Add</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Matric No</th>
              <th>Course Code</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>{r.matric}</td>
                <td>{r.course}</td>
                <td>{r.score}</td>
                <td>{r.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
