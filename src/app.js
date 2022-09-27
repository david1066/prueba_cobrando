'user strict'
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT = 1234;
const sequelize = require('./database/db');
const Departamento = require('./database/models/departamento');


//llenar el req.body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.get('/', (req, res) => {
    
  

     Departamento.findAll().then(cities=>{
        res.json(cities);
    });
});
app.use('/api/empleado',require('./routes/empleado'));
app.use('/api/departamento',require('./routes/departamento'));

//arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
    //conectar a la base de datos de
    //force true: drop tables
    sequelize.sync({
        force:false
    }).then(()=>{
        console.log("nos hemos conectado  a la base de datos");
    }).catch(error=>{
        console.log("se ha producido un error", error);
    });

});