const fs = require('fs');
const colors = require('colors');


const crearArchivo = (base = 5, listar = false) => {

	return new Promise((resolve, reject) => {
		

		let salida = ''

		for (let i = 1; i < 11; i++) {
		    salida +=  `${ base} x ${ i} = ${ base * i}\n`;
		}

		if( listar ) {
			console.log('=========================='.green);
			console.log('Tabla ', color.blue(base));
			console.log('=========================='.green);
			console.log(salida);
		}

		fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

		resolve(`tabla-${ base}.txt creada`);
	})

	/*
		console.log('==========================');
		console.log('Tabla ', base);
		console.log('==========================');

		let salida = ''

		for (let i = 1; i < 11; i++) {
		    salida +=  `${ base} x ${ i} = ${ base * i}\n`;
		}

		console.log(salida);

		//fs.writeFile(`tabla-${ base}.txt`, salida, (err) =>{
		//    if(err) throw err;
		//    console.log(`tabla-${ base}.txt creada`);
		//});

		fs.writeFileSync(`tabla-${ base}.txt`, salida);

		console.log(`tabla-${ base}.txt creada`);
	*/

	
}

const crearArchivo2 = async(base = 5, listar = false, hasta = 10) => {

		try {
			

			//let salida = '';
			let salida = consola = '';

			for (let i = 1; i <= hasta; i++) {
			    salida +=  `${ base } x ${ i } = ${ base * i }\n`;
			    consola +=  `${ base } ${ 'x'.yellow } ${ i } ${ '='.yellow } ${ base * i }\n`;
			}
			
			if( listar ) {
				console.log('=========================='.green);
				console.log('Tabla '.green, colors.blue(base));
				console.log('=========================='.green);
				console.log(consola);
			}

			fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

			return `tabla-${ base}.txt creada`;
		} catch (err){
			throw err;
		}
		
}

module.exports = {
	crearArchivo,
	crearArchivo2,

}

