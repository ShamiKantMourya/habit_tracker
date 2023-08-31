import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiSolidArchiveOut } from "react-icons/bi";
import { useDispatch } from "react-redux";

const Habit = ({ habit }) => {
  const { id, imageUrl, name } = habit;
  const dispatch = useDispatch();
  const deleteHabitHandler = (id) => {
    dispatch({
      type: "DELETE_HABITS",
      payload: id,
    });
  };
  const addArchiveHandler = () => {
    dispatch({
      type: "ADD_ARCHIVE",
      payload: habit,
    });
  };
  const editHabitHandler = (id) => {

  };

  return (
    <div className="habit-box">
      <div className="img-box">
        <img src={imageUrl} alt="task" />
      </div>
      <h3 className="habit-txt">{name}</h3>
      <div className="add-remove-archive">
        <button onClick={() => editHabitHandler(id)}>
          <FiEdit />
        </button>
        <button onClick={() => deleteHabitHandler(id)}>
          <MdDelete />
        </button>
        <button onClick={addArchiveHandler}>
          <BiSolidArchiveOut />
        </button>
      </div>
    </div>
  );
};

export default Habit;
