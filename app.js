//const yargs = require('yargs/yargs')
//const { hideBin } = require('yargs/helpers')
//const argv = yargs(hideBin(process.argv)).argv




const { crearArchivo, crearArchivo2 } = require('./helpers/multipicar');
const argv = require('./config/yargs');
//const colors = require('colors');
require('colors');


console.clear();

//const [ , , arg3 = 5] = process.argv;
//const [ , base = 5] = arg3.split('=');


//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.b);


//const base = argv.b;
//const listar = argv.l

//console.log(base);

crearArchivo2(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(argv.err));



