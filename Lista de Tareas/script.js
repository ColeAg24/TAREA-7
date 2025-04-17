const entradaTarea = document.getElementById("tarea");
const botonTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

function agregarElemento() {
    const textoTarea = entradaTarea.value;

    if (textoTarea.trim() !== "") {
        const nuevaTarea = document.createElement("li");

        const textoElemento = document.createElement("span");
        textoElemento.textContent = textoTarea;

        const eliminarBtn = document.createElement("button");
        eliminarBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        eliminarBtn.className = "eliminar-btn";

        textoElemento.addEventListener("click", marcarComoCompletada);
        eliminarBtn.addEventListener("click", eliminarTarea);

        nuevaTarea.appendChild(textoElemento);
        nuevaTarea.appendChild(eliminarBtn);

        listaTareas.appendChild(nuevaTarea);

        entradaTarea.value = "";
    }
}

function marcarComoCompletada(event) {
    const tarea = event.target.parentElement;
    tarea.classList.toggle("completada");
}

function eliminarTarea(event) {
    event.stopPropagation();
    const tarea = event.target.closest("li");
    tarea.remove();
}

botonTarea.addEventListener("click", agregarElemento);

entradaTarea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarElemento();
    }
});
