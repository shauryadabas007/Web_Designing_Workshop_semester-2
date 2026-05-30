import React from 'react';
import Student from './Student';
import './App.css';

function App() {
    return (
        <div className="container">
            <h2>Student Information</h2>
            <Student name="Rahul Sharma" course="Computer Science" marks={85} />
            <Student name="Anita Verma" course="Information Technology" marks={92} />
            <Student name="Rohan Gupta" course="Electronics" marks={78} />
        </div>
    );
}

export default App;``