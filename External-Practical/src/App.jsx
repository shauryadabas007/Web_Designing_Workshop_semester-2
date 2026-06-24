import { useState } from "react";
import "./App.css";

function App() {
  const [subjects, setSubjects] = useState("");
  const [marks, setMarks] = useState([]);
  const [result, setResult] = useState(null);

  const handleSubjectChange = (e) => {
    const count = Number(e.target.value);
    setSubjects(count);
    setMarks(Array(count).fill(""));
    setResult(null);
  };

  const handleMarkChange = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  const calculateResult = () => {
    const numericMarks = marks.map(Number);

    const total = numericMarks.reduce((sum, mark) => sum + mark, 0);
    const average = total / subjects;

    let grade = "";
    let status = "Pass";

    if (numericMarks.some((mark) => mark < 40)) {
      status = "Fail";
    }

    if (average >= 90) grade = "A+";
    else if (average >= 80) grade = "A";
    else if (average >= 70) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 50) grade = "D";
    else grade = "F";

    setResult({
      total,
      average: average.toFixed(2),
      grade,
      status,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Student Result Calculator</h1>

        <label>Enter Number of Subjects</label>

        <input
          type="number"
          min="1"
          placeholder="Enter subjects"
          value={subjects}
          onChange={handleSubjectChange}
        />

        {marks.map((mark, index) => (
          <input
            key={index}
            type="number"
            placeholder={`Enter marks for Subject ${index + 1}`}
            value={mark}
            onChange={(e) => handleMarkChange(index, e.target.value)}
          />
        ))}

        {subjects > 0 && (
          <button onClick={calculateResult}>
            Calculate Result
          </button>
        )}

        {result && (
          <div className="result">
            <h2>Result</h2>
            <p>Total Marks: {result.total}</p>
            <p>Average: {result.average}</p>
            <p>Grade: {result.grade}</p>
            <p>Status: {result.status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;