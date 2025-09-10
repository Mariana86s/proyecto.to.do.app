import React, { useState } from 'react'

function Tarea({ nombre, completada, onEliminar, onEditar }) {
    const [editando, setEditando] = useState(false)
    const [nuevoNombre, setNuevoNombre] = useState(nombre)

    const guardarEdicion = () => {
        if (nuevoNombre.trim()) {
            onEditar(nuevoNombre)
            setEditando(false)
        }
    }

    return (
        <div className="tarea">
            <input
                type="checkbox"
                checked={completada}
                readOnly
                className="tarea-checkbox"
            />
            {editando ? (
                <>
                    <input
                        value={nuevoNombre}
                        onChange={e => setNuevoNombre(e.target.value)}
                        className="tarea-nombre"
                    />
                    <button className="btn-editar" onClick={guardarEdicion}>Guardar</button>
                    <button className="btn-editar" onClick={() => setEditando(false)}>Cancelar</button>
                </>
            ) : (
                <>
                    <span className="tarea-nombre">{nombre}</span>
                    <button className="btn-editar" onClick={() => setEditando(true)}>Editar</button>
                </>
            )}
            <button className="btn-eliminar" onClick={onEliminar}>
                Eliminar
            </button>
        </div>
    );
}
export default Tarea