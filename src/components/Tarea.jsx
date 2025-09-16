function Tarea({ nombre,estado, completada, onEliminar, onEditar, onToggle }) {
    return (
        <div className="tarea">
            <button
                 onClick={onToggle}>
                   {estado === "pendiente" ? "pendiente" : "completada"}     
            </button>
                    <span className="tarea-nombre">{nombre}</span>
                    <button className="btn-editar" onClick={onEditar}>Editar</button>
            <button className="btn-eliminar" onClick={onEliminar}>
                Eliminar
            </button>
        </div>

        
    );
}
export default Tarea