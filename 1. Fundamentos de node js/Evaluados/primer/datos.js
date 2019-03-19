const fs = require ('fs');
const {cursos} = require ('./principal');


let TodCursos = () => { //lectura de los cursos
	let {curso1:{id1,nombre1,duracion1,valor1}} = cursos;
	setTimeout(function(){
		console.log('id del curso: ' + id1);
		console.log('Nombre del curso: ' + nombre1);
		console.log('Duracion: ' + duracion1 + ' Horas');
		console.log('valor: ' + valor1 +'\n');
	},2000);

	let {curso2:{id2,nombre2,duracion2,valor2}} = cursos;
	setTimeout(function(){
		console.log('id del curso: ' + id2);
		console.log('Nombre del curso: ' + nombre2);
		console.log('Duracion: ' + duracion2 + ' Horas');
		console.log('valor: ' + valor2 +'\n');
	},4000);

	let {curso3:{id3,nombre3,duracion3,valor3}} = cursos;
	setTimeout(function(){
		console.log('id del curso: ' + id3);
		console.log('Nombre del curso: ' + nombre3);
		console.log('Duracion: ' + duracion3 + ' Horas');
		console.log('valor: ' + valor3 +'\n');
	},6000);
}

const opciones ={ //opciones para el yargs, son los parametros que debemos llenar en el cmd
	id:{
		demand: true,
		alias :'i'
	},
	nombre:{
		demand:true,
		alias :'n'
	},
	cedula:{
		demand:true,
		alias :'c'
	}
}

const argv =require('yargs') //uso del yargs para trabajar en consola
			.command('inscribir','Matriculando curso',opciones)
			.argv
setTimeout(function(){
if(argv.id == 1 || argv.id == 2 || argv.id == 3) {
	console.log('Curso valido, creando archivo');
	crearArch(argv.id,argv.nombre,argv.cedula);
} else {
	if(argv.id == null) {
		TodCursos();
	} else {
		console.log('Curso no existe, compruebe la id del curso y vuelva a intentar\n');
		TodCursos();

	}
} 
},1000)

let crearArch = (i,n,c) => { //Creacion de archivo que toma como parametros la id, el nombre y la cedula
	setTimeout(function(){
		if(i == 1) {
			texto = '' + n + ' Con cedula: ' + c + '\n' +
					'Se ha matriculado satisfactoriamente en el curso id: ' + i +
					'. Bases de datos, con una duracion de ' + 48 + ' horas\n' +
					'con un valor de $500000';
		}
		if(i == 2) {
			texto = '' + n + ' Con cedula: ' + c + '\n' +
					'Se ha matriculado satisfactoriamente en el curso id: ' + i +
					'. python, con una duracion de ' + 48 + ' horas\n' +
					'con un valor de $450000';
		}
		if(i == 3) {
			texto = '' + n + ' Con cedula: ' + c + '\n' +
					'Se ha matriculado satisfactoriamente en el curso id: ' + i +
					'. Node.js, con una duracion de ' + 48 + ' horas\n' +
					'con un valor de $150000';
		}
		fs.writeFile('matricula.txt',texto,(err)=>{
			if(err) throw (err);
			console.log('Se ha creado satisfactoriamente el archivo');
		})
		
	},1500)
}