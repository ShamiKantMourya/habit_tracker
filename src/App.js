import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fakeFetch } from "./fakeFetch";

import Homepage from './homepage';
import AddHabit from './addHabit';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/habits");
      if (status === 200) {
        setHabits(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
          <Homepage habits = {habits} />
          }></Route>
          <Route path='/addHabit' element={<AddHabit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
