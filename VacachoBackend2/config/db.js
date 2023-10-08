const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada")

    } catch (error){
        console.log(error);
        process.exit(1) //Detener la app
    }
}

module.exports = conectarDB
