import Inicio from '../components/Inicio'
import Filtros from '../components/Filtros'
import InputTarea from '../components/InputTarea'
import { useEffect, useState } from 'react'
import { getData, putData } from '../services/fetch'
import ListaTareas from '../components/ListaTareas'

function PaginaInicio() {
    const [tareas, setTareas] = useState([])

    useEffect(() => {
        async function fetchTareas() {
            const data = await getData("tareas")
            setTareas(data)
        }
        fetchTareas()
    }, [])
    return (     
        <div>

            <Inicio />
            <div className='cont-filtros'>
                <InputTarea />
                <Filtros />
                <ListaTareas tareas={tareas}  />
            </div>
        </div>
    )
}

export default PaginaInicio