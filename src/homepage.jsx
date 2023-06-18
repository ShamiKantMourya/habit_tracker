import React from 'react';
import { Link } from 'react-router-dom';

import "./addHabits.css";

const Homepage = (props) => {
    const {habits, deleteHabit, updatetask} = props;
    // console.log(habits)
  return (
    <div className='main'>
        <div className='defaulttask'>
        <Link to="/addHabit" className='text'>Create your own habit</Link>
        <div className='qwer'>
        {
            habits.map(({id, image, task}) => 
            <div className='task-card'>
                <div className='task' key={id}>
                    <img src= {image} alt={task} />
                    <h3>{task}</h3>
                    <div className='btn'>
                    <button onClick={updatetask({id, image, task})}>Edit</button>
                    <button onClick={deleteHabit({id, image, task})}>Delete</button>
                    <button>Archive</button>
                    </div>
                    </div>
                </div>
            )
        }
        </div>
        </div>
    </div>
  )
}

export default Homepage;