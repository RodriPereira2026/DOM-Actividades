class Actividad {
    constructor (titulo, descripcion, imagen, indice) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.indice = indice; 
    }
}

class Repositorio {
    constructor () {
        this.actividades = [];
        this.indice = 1
    }

    mostrarTodasLasActividades () {
        return this.actividades;
    }

    crearUnaActividad (titulo, descripcion, imagen) {
        const nuevaActividad = new Actividad (titulo, descripcion, imagen, this.indice);
        this.actividades.push(nuevaActividad);
        this.indice ++;
        
        return nuevaActividad;
    }
}

const repositorio1 = new Repositorio ();

function agregarTarjeta(event) {
event.preventDefault();
    
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;
    
if (titulo === "" || descripcion === "" || imagen === "") {
    alert ("No están completos los datos");
    return;
}

repositorio1.crearUnaActividad(titulo, descripcion, imagen);

    mostrarTodasLasActividades();
}

function mostrarTodasLasActividades() {
    const contenedor = document.getElementById("contenedor");
    
    contenedor.innerHTML = "";
    
    repositorio1.mostrarTodasLasActividades().forEach(() => {
        
    const arrayDeHtml = repositorio1.actividades.map((actividad) => {
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const p = document.createElement("p");

        div.classList.add("tarjeta");
        h2.innerHTML = actividad.titulo;
        p.innerHTML = actividad.descripcion;
        img.scr = actividad.imagen;

        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(p);
        
        return div;
    })

arrayDeHtml.forEach ((div) => {contenedor.appendChild(div));

});
        
    }  
    
    const boton = document.getElementById("boton");
    boton.addEventListener("click", agregarTarjeta);