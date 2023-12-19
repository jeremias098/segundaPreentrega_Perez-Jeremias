alert('Bienvenidos a la clase de Javascript');

class Alumnos {
    constructor(nombre, nota1, nota2, nota3) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    promedio() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    detalles() {
        return `Nombre: ${this.nombre}, Notas: ${this.nota1}, ${this.nota2}, ${this.nota3}, Promedio: ${this.promedio().toFixed(2)}`;
    }
}

let alumnos = [];
let promedios = [];

let cantidadDeAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos que participarán en el curso:'));

function validarNota(nota) {
    return nota >= 1 && nota <= 10;
}

function cargarAlumnos() {
    for (let i = 0; i < cantidadDeAlumnos; i++) {
        let nombre = prompt('Ingrese el nombre del alumno:');
        let nota1, nota2, nota3;

        do {
            nota1 = parseInt(prompt('Ingrese la primer nota (entre 1 y 10):'));
            if (!validarNota(nota1)) {
                alert('La nota debe estar entre 1 y 10. Por favor, intente nuevamente.');
            }
        } while (!validarNota(nota1));

        do {
            nota2 = parseInt(prompt('Ingrese la segunda nota (entre 1 y 10):'));
            if (!validarNota(nota2)) {
                alert('La nota debe estar entre 1 y 10. Por favor, intente nuevamente.');
            }
        } while (!validarNota(nota2));

        do {
            nota3 = parseInt(prompt('Ingrese la tercer nota (entre 1 y 10):'));
            if (!validarNota(nota3)) {
                alert('La nota debe estar entre 1 y 10. Por favor, intente nuevamente.');
            }
        } while (!validarNota(nota3));

        let alumno = new Alumnos(nombre, nota1, nota2, nota3);
        alumnos.push(alumno);
    }
}

function mostrarResultados() {
    
    alumnos.sort((a, b) => b.promedio() - a.promedio());

    let mensaje = "Resultados:\n\n";
    for (let alumno of alumnos) {
        mensaje += alumno.detalles() + "\n";
    }
    alert(mensaje);
}

cargarAlumnos();
mostrarResultados();