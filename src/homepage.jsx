import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = (props) => {
    const {habits} = props;
    // console.log(habits)
  return (
    <div>
        <Link to="/addHabit" className='text'>Create your own habit</Link>
        <div className='defaulttask'>
        {
            habits.map(({id, image, task}) => 
            <div className='task-card'>
                <div className='task' key={id}>
                    <img src= {image} alt={task} />
                    <h3>{task}</h3>
                    </div>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default Homepage;