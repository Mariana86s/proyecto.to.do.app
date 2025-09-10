import { useState } from 'react'
import { deleteData, putData } from '../services/fetch'
import Tarea from './tarea'

const ListaTareas = ({tareas}) => {
    const [visible,setVisible] = useState(false)
    const [nombreTarea,setNombreTarea] = useState("")

    async function onEliminar(id) {
        const peticion = await deleteData("tareas",id)
        console.log(peticion);
    }
    async function edicion(id, nuevoNombre) {
        const peticion = await putData("tareas",{ nombre: nuevoNombre },id)  
        console.log(peticion);
    }

    return (
    <div>
        {tareas.map((tarea)=>{
            return(
            <Tarea
                key={tarea.id}
                nombre={tarea.nombre}
                completada={tarea.estado}
                onEliminar={() => onEliminar(tarea.id)}
                onEditar={()=>{
                    setVisible(!visible)
                    localStorage.setItem("idTarea",tarea.id)
                }}
            />
            )
        })}
        {visible && (
            <div>
                <h1>hola</h1>
                    <input type="text" onChange={(e)=>setNombreTarea(e.target.value)}/>
                    <button onClick={()=>edicion(localStorage.getItem("idTarea"),nombreTarea)}>Actualizar</button>
            </div>
        )}
    </div>
  )
}

export default ListaTareas