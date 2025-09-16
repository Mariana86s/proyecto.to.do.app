import { useState } from 'react'
import { deleteData } from '../services/fetch'
import Tarea from './tarea'

const ListaTareas = ({ tareas, filtro, actualizarTareas}) => {
    const [visible, setVisible] = useState(false)
    const [nombreTarea, setNombreTarea] = useState("")

 const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === "todas") return true
    return tarea.estado === filtro
})
    async function onEliminar(id) {
        const peticion = await deleteData("tareas", id)
        if (actualizarTareas) actualizarTareas()
        console.log(peticion);
    }
    async function edicion(id, nuevoNombre) {
        try {
            const peticion = await fetch(`http://localhost:3001/tareas/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre: nuevoNombre })
            })
            if (actualizarTareas) actualizarTareas()
            console.log(peticion);
            setVisible(false)
            return peticion
        } catch (error) {
            console.error(error);
        }
    }
    async function cambiarEstado(id, estado) {
        try {
            const peticion = await fetch(`http://localhost:3001/tareas/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ estado: estado === "pendiente" ? "completada" : "pendiente" })
            })
            console.log(peticion);
            return peticion
            if (actualizarTareas) actualizarTareas()
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            {tareasFiltradas.map((tarea) => {
                return (
                    <Tarea
                        key={tarea.id}
                        nombre={tarea.nombre}
                        completada={tarea.estado}
                        onEliminar={() => onEliminar(tarea.id)}
                        estado={tarea.estado}
                        onEditar={() => {
                            setVisible(!visible)
                            localStorage.setItem("idTarea", tarea.id)
                        }}
                        onToggle={() => cambiarEstado(tarea.id, tarea.estado)}
                    />
                )
            })}
            {visible && (
                <div>
                    <input type="text" onChange={(e) => setNombreTarea(e.target.value)} />
                    <button onClick={() => edicion(localStorage.getItem("idTarea"), nombreTarea)}>Actualizar</button>
                </div>
            )}
        </div>
    )
}

export default ListaTareas