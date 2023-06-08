import React from 'react';
import '../css/ToDo.css';
import { AiFillCloseCircle } from "react-icons/ai";

function ToDo( {id, text, complete, doneTask, deleteTask, color }) {

  return(
    <div 
    className={ complete ? "todo-container complete" : "todo-container"}
      >
      <div 
        className="todo-text"
        onClick={() => doneTask(id)}
      >
        {text}
      </div>
      <div 
        className="todo-container-icon"
        onClick={() => deleteTask(id)}
      >
        <AiFillCloseCircle className="todo-icon"/>
      </div>
    </div>
  );
}

export default ToDo;
