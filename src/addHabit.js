import React from 'react';

const AddHabit = () => {
    return (
        <div>
            <div className='container'>
                <h1>New Habit</h1>
                <div className='task-name'>
                    <h3>NAME OF TASK</h3>
                    <input type='text' placeholder='which task you want to add'></input>
                </div>
                <div className='schedule'>
                    <div className='repeat'>
                    <h3>REPEAT</h3>
                    <select>
                        <option value="Daily">Daily</option>
                        <option value="Once in week">Once in week</option>
                        <option value="Twice in week">Twice in week</option>
                        <option value="Thrice in week">Thrice in week</option>
                    </select>
                    </div>
                    <div className='goal'>
                        <h3>GOAL</h3>
                        <select>
                        <option value="1 time daily">1 time daily</option>
                        <option value="2 times daily">2 times daily</option>
                        <option value="3 times daily">3 times daily</option>
                    </select>
                    </div>
                    <div className='timeofday'>
                        <h3>TIME OF DAY</h3>
                        <select>
                        <option value="Any Time">Any Time</option>
                        <option value="In Morning">In Morning</option>
                        <option value="In Evening">In Evening</option>
                    </select>
                    </div>
                    <div className='startdate'>
                        <h3>START DATE</h3>
                        <select>
                        <option value="Today">Today</option>
                        <option value="Tommorow">Tommorow</option>
                        <option value="Dayaftertommorow">Day After Tommorow</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddHabit;