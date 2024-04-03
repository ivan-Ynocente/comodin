const maria={
    nombre: "Maria",
    edad: 20,
    cursosAprobados:["Curso Definitivo html y Css", "Curso practico Html y Css"],

    aprobarCurso(cursillo){
        this.cursosAprobados.push(cursillo);
        

    },
};

function Student(nombre, edad , cursosAprobados){
    this.nombre= nombre;
    this.edad= edad;
    this.cursosAprobados= cursosAprobados;
}

Student.prototype.aprobarCurso = function (curso){
    this.cursosAprobados.push(curso);

}
const juanita = new Student(
    "Juanita Alejandra",
    19,
    ["Curso Video Juegos","Introduccion creacion video juegos" ]
);

