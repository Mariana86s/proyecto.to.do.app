import React from 'react'

function Filtros({onFiltroChange}) {
    return (
        <div className="contenedor">
            <div className="filtro">
                <h2>FILTROS</h2>
                <ul className="lista">
                    <li>
                        <input
                            id="cajitaCompletada"
                            type="radio"
                            name="filtro"
                            onChange={() => onFiltroChange("completada")}
                        />Completada
                    </li>
                    <li>
                      <input
                            id="cajitaPendiente"
                            type="radio"
                            name="filtro"
                            onChange={() => onFiltroChange("pendiente")}
                        />Pendientes
                    </li>
                    <li>
                        <input
                            id="cajitaTodas"
                            type="radio"
                            name="filtro"
                            defaultChecked
                            onChange={() => onFiltroChange("todas")}
                        />Todas

                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Filtros