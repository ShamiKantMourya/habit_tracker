import React from 'react';
import { useState } from 'react';

import "./addHabits.css";

const AddHabit = () => {
    const [newHabit, setNewHabit] = useState({
        task: "",
        repeat: "",
        goal: "",
        time: "",
        start: ""
    });
const [task, setTask] = useState({});
    const updateTask = () =>{
        setTask(newHabit);
    };
    console.log(newHabit);
    console.log(task);
    return (
        <div>
            <div className='container'>
                <h1>New Habit</h1>
                <div className='task-name'>
                    <h3>NAME OF TASK</h3>
                    <input type='text' placeholder='which task you want to add' onChange={event => setNewHabit({...newHabit, task: event.target.value})}/>
                </div>
                <div className='schedule'>
                    <div className='repeat'>
                    <h3>REPEAT</h3>
                    <select onChange={event => setNewHabit({...newHabit, repeat: event.target.value })}>
                        <option value="Daily">Daily</option>
                        <option value="Once in week">Once in week</option>
                        <option value="Twice in week">Twice in week</option>
                        <option value="Thrice in week">Thrice in week</option>
                    </select>
                    </div>
                    <div className='goal'>
                        <h3>GOAL</h3>
                        <select onChange={event => setNewHabit({...newHabit, goal: event.target.value })}>
                        <option value="1 time daily">1 time daily</option>
                        <option value="2 times daily">2 times daily</option>
                        <option value="3 times daily">3 times daily</option>
                    </select>
                    </div>
                    <div className='timeofday'>
                        <h3>TIME OF DAY</h3>
                        <select onChange={event => setNewHabit({...newHabit, time: event.target.value })}>
                        <option value="Any Time">Any Time</option>
                        <option value="In Morning">In Morning</option>
                        <option value="In Evening">In Evening</option>
                    </select>
                    </div>
                    <div className='startdate'>
                        <h3>START DATE</h3>
                        <select onChange={event => setNewHabit({...newHabit, start: event.target.value })}>
                        <option value="Today">Today</option>
                        <option value="Tommorow">Tommorow</option>
                        <option value="Dayaftertommorow">Day After Tommorow</option>
                    </select>
                    </div>
                </div>
                <div className='button'>
                <button onClick={updateTask}>Save</button>
                <button>Discard</button>
                </div>
              
            </div>
        </div>
    )
}

export default AddHabit;