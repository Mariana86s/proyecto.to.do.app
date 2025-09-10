import React, { useState } from 'react'
import { postData } from '../services/fetch.js'
function InputTarea() {
    const [nombreTarea, setNombreTarea] = useState('')

    const enviarTarea = async () => {
        if (!nombreTarea.trim()) return; //si una tarea no tuviera nada escrito que se haga una validacion
        const tarea = { nombre: nombreTarea,estado: "pendiente" } //sirve para saber lo que tenemos que guardar
        try {
            const res = await postData('tareas', tarea)
            console.log('Tarea enviada:', res)
            setNombreTarea('')
        } catch (error) {
            console.error('Error al enviar tarea:', error) //si ocurre algún error al enviar la tarea, se ve en la consola
        }
    }
    return (
        <div className="principal">
            <h2>MIS TAREAS</h2>
            <input id="cajitaTexto" type="text" placeholder="AGREGAR TEXTO" onChange={(e) => setNombreTarea(e.target.value)} />
            <button id="cajitaAgregar" onClick={enviarTarea}>Agregar Tarea</button>
            <div id="resultado"></div>
        </div>
    )
}
export default InputTarea 