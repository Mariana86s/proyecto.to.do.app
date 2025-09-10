import React from 'react'

function Filtros() {
    return (
        <div className="contenedor">
            <div className="filtro">
                <h2>FILTROS</h2>
                <ul className="lista">
                    <li>
                        <input id="cajitaCompletada" type="checkbox" />Completada
                    </li>
                    <li>
                        <input id="cajitaPendiente" type="checkbox" />Pendientes
                    </li>
                    <li>
                        <button id="botonFiltrar">Filtrar</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Filtros