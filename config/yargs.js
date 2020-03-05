const opts = {
    descripcion: {
        demand: true,
        alias: 'b'
    }
}

const opts2 = {
    descripcion: {
        alias: 'b',
        demand: true
    },
    completado: {
        default: true,
        alias: 'c'
    }
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualizar el estado completado de una tarea', opts2)
    .command('borrar', 'Tarea Borrada', opts)
    .help()
    .argv;

module.exports = {
    argv
}