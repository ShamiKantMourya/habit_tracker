import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Habit from '../Components/Habit';

const Archive = () => {
  const {Archive} = useSelector(state => state.habits);
  // console.log(Archive, "Archive");
  return (
    <div className='archive'>
    {
      Archive?.map((habit) => 
      <Habit key={habit.id} habit = {habit} />
      )
    }     
    </div>
  )
}

export default Archive;