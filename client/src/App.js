import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { StudentsPerNationality } from "./components/StudentsPerNationality";
import { AddStudent } from "./components/AddStudent";

function App() {
  const [nationality, setNationality] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/init");
      const jsonData = await data.json();
      setNationality(jsonData);
    };
    fetchData().catch((err) => console.log(err));
  }, [nationality]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route
          path="/home"
          element={<StudentsPerNationality nationality={nationality} />}
        />
        <Route path="/new" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
