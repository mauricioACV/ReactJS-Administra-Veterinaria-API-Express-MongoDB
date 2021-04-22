const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function() {
    //Agrega nuevos pacientes via post
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    );

    //Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes', 
        pacienteController.obtenerPacientes
    );

    //Obtiene un paciente por ID
    router.get('/pacientes/:id', 
        pacienteController.obtenerPaciente
    );

    //Actualizar un registro paciente por su id
    router.put('/pacientes/:id', 
        pacienteController.actualizarPaciente
    );

    //Elimina un registro paciente por su id
    router.delete('/pacientes/:id', 
        pacienteController.eliminarPaciente
    );

    return router;
};