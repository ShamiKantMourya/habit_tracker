import React from 'react';
import { Link } from 'react-router-dom';

import "./addHabits.css";

const Homepage = (props) => {
    const {habits} = props;
    // console.log(habits)
  return (
    <div className='main'>
        <div className='defaulttask'>
        <Link to="/addHabit" className='text'>Create your own habit</Link>
        {
            habits.map(({id, image, task}) => 
            <div className='task-card'>
                <div className='task' key={id}>
                    <img src= {image} alt={task} />
                    <h3>{task}</h3>
                    <div className='btn'>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Archive</button>
                    </div>
                    </div>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default Homepage;