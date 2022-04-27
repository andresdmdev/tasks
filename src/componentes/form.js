import React, { useState } from "react";
import '../stylesheets/formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario(props){

    const [input, setInput] = useState('');
    
    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
                
        const nueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };

        props.onSubmit(nueva);
    };

    return(
        <form 
            className="formulario"
            onSubmit={manejarEnvio}>
            <input 
                className="tarea-input" 
                type="text"
                placeholder="Write a task"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">Add task</button>
        </form>
    );
}

export default Formulario;