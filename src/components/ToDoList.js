import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import "../css/ToDoList.css";

function ToDoList() {

  const [todos, setTask] = useState([]);

  const addTask = task => {
    //console.log(task);
    if (task.text.trim()){
      task.text = task.text.trim();
      //console.log(task.background);
      const todoUpdated = [task, ...todos];
      setTask(todoUpdated);
    }
  }

  const deleteTask = id => {
    const updateTasks = todos.filter(task => task.id !== id);
    setTask(updateTasks);
  }

  const doneTask = id => {
    const todoUpdated = todos.map(task => {
      if (task.id === id) {
        task.complete = !task.complete; //si era falso cambia a verdadero
      }
      return task;
    });
    setTask(todoUpdated);
  }

  return(
    <>
      <ToDoForm onSubmit={ addTask }/>
      <div className="to-do-container">
        {
          todos.map((task) =>
            <ToDo 
              key={ task.id }
              id= { task.id }
              text={ task.text } 
              complete={ task.complete }
              doneTask={ doneTask }
              deleteTask={ deleteTask }
              color={ task.background }
            />
          )
        }
      </div>
    </>
  );
}

export default ToDoList;