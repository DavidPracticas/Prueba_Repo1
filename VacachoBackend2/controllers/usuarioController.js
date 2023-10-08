//Controladores para hacer peticiones

const Usuario = require("../models/Usuario");
//medodo para crear usuario
exports.crearUsuario = async (req,res) => {

    try{
        let usuario;
        //crear usuario [POST]
        usuario = new Usuario(req.body); //se esta agarrando el modelo Usuario en /models/usuario

        await usuario.save(usuario);
        res.send(usuario); //envia los datos

    }catch (error){
        console.log(error)
        res.status(500).send('Hubo un error en crearUsuario controller')
    }
    //console.log("Mensaje desde el controlador crearUsuario")
}
//metodo para obtener usuario [GET]
exports.consultarUsuario = async(req,res) => {
    try{
        const usuarios = await Usuario.find();
        console.log("Se uso consultarUsuario del controlador con exito")
        res.json(usuarios)
    }catch (error){
        console.log(error)
        res.status(500).send('Hubo un error en consultarUsuario controller')
    }
}