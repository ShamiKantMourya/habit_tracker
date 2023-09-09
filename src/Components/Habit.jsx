import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiSolidArchiveOut, BiSolidArchiveIn } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Habit = ({ habit }) => {
  const { id, imageUrl, name } = habit;
  const { Archive } = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const isInArchive = Archive?.some((item) => item.id === id);

  const deleteHabitHandler = (id) => {
    dispatch({
      type: "DELETE_HABITS",
      payload: id,
    });
  };
  const archiveHandler = (id) => {
    if (isInArchive) {
      dispatch({
        type: "REMOVE_ARCHIVE",
        payload: id,
      });
    } else {
      dispatch({
        type: "ADD_ARCHIVE",
        payload: habit,
      });
    }
  };
  const editHabitHandler = (id) => {
    dispatch({
      type: "SET_HABITS",
      payload: true
    });
    dispatch({
      type: "SET_HABIT_ID",
      payload: id
    })
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
        <button onClick={() => archiveHandler(id)}>
          {isInArchive ? <BiSolidArchiveOut /> : <BiSolidArchiveIn/>}
        </button>
      </div>
    </div>
  );
};

export default Habit;
