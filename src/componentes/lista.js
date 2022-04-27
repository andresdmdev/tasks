import React, { useState } from "react";
import Formulario from "./form";
import Tarea from "./tarea";
import '../stylesheets/lista.css';

function Lista(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();

            const total = [tarea,...tareas];

            setTareas(total);
        } else{
            alert('Input another task');
        }

    };

    const eliminarTarea = id => {
        const total2 = tareas.filter(tarea => tarea.id !== id);
        setTareas(total2);
    };

    const completarTarea = id => {
        
        const completar = tareas.map(tarea => {

            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }

            return tarea;
        });

        setTareas(completar);

    };

    return(
        <>
            <Formulario onSubmit={agregarTarea} />
            <div className="contenedor-lista">
                {
                  tareas.map((tarea) => 
                    <Tarea
                        key={tarea.id}
                        id={tarea.id} 
                        texto={tarea.texto}
                        completada={tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea={completarTarea}
                    />
                  )  
                }
            </div>
        </>
    );
}

export default Lista;