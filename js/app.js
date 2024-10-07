function menuDesplegable() {
    const menu = document.getElementById('menuLateral');
    if (menu.classList.contains('abrir')) {
        menu.classList.remove('abrir');
    } else {
        menu.classList.add('abrir');
    }
}

function seleccionarOpcion(opcion) {
    // Sacamos lo seleccionado
    const items = document.getElementsByClassName('menu-item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('seleccionado');
    }

    //Seleccionar botron
    const itemSeleccionado = items[opcion - 1];
    itemSeleccionado.classList.add('seleccionado');

    const identificarSeleccion = itemSeleccionado.getAttribute('data-option');

    if (identificarSeleccion === 'inicio') {
        alert("Inicio seleccionado");
    } else if (identificarSeleccion === 'mercado') {
        alert("Mercado Interno seleccionado");
    } else if (identificarSeleccion === 'dark') {
        alert("Dark Mode seleccionado");
    }
}
