import React, { useState, useEffect } from "react";
import "../css/ToDoForm.css";
import { v4 as uuidv4 } from "uuid"

function ToDoForm(props) {
  
  //color
  const [color, setColor] = useState('');

  useEffect(() => {
    generateColor();
  }, []);

  const generateColor = () => {
    const pastelColors = [
      '#FDC3C3', '#FFE6B3', '#FFD9F7', '#B3E6E6', '#B3F0FF', '#D9F0FF',
      '#FFF9B3', '#F7FFD9', '#E6FFB3', '#E6E6E6', '#F0F0F0', '#FFEAEA'
    ];

    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setColor(randomColor);
  };


  const [input, setInput] = useState("");

  const handleChange = event => {
    setInput(event.target.value); // extraer texto
  }

  const handleSending = event => {
    event.preventDefault(); //no volver a cargar app
    
    const newTask = {
      id: uuidv4(), //npm
      text: input,
      complete: false,
      background: color
    };

    //console.log(newTask);


    props.onSubmit(newTask);
  }

  return (
    <form 
      className="to-do-form"
      onSubmit={ handleSending }
    >
      <input 
        className="to-do-input"
        type="text"
        placeholder="Escribe..."
        name="text"
        onChange={ handleChange }
      />
      <button className="to-do-button">
        Agregar tarea
      </button>
    </form>
  )  
}

export default ToDoForm;