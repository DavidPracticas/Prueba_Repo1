const express = require ('express');
const conectarDB = require('./config/db');
const cors = require ('cors');

//crear servidor

const app = express();

//Conectar a db
conectarDB();
app.use(cors());
//Habilitar los mensajes json
app.use(express.json());
//Definir rutas con el front

app.use('/api/usuarios', require('./routes/usuarios'));


//Puerto en que esta abierto el server
app.listen(4000, () =>{
    console.log("El servidor esta corriendo")
})
