import Inicio from '../components/Inicio'
import Filtros from '../components/Filtros'
import InputTarea from '../components/InputTarea'
import { useEffect, useState } from 'react'
import { getData, putData } from '../services/fetch'
import ListaTareas from '../components/ListaTareas'

function PaginaInicio() {
    const [tareas, setTareas] = useState([])
    const [filtro, setFiltro] = useState("todas")

const fetchTareas = async () => {
        try {
            const data = await getData("tareas")
            setTareas(data)
        } catch (error) {
            console.error("Error al cargar tareas:", error)
        }
    }
    
    useEffect(() => {
        fetchTareas();
    }, [tareas]);

    const tareasFiltradas = tareas.filter(tarea => {
        if (filtro === "todas") return true
        return tarea.estado === filtro

    });
    return (
        <div>

            <Inicio />
            <div className='cont-filtros'>
                <InputTarea actualizarTareas={fetchTareas}/>
                <Filtros onFiltroChange={setFiltro} />
                <ListaTareas tareas={tareasFiltradas} 
                filtro={filtro} 
                actualizarTareas={fetchTareas}/>
            </div>
        </div>
    )
}

export default PaginaInicio