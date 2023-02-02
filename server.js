const express = require('express');
const app = express();

//carga la base de datos db.json en un objeto llamado "db"
const db = require('./db.JSON');

//carga la base de datos usuarios.JSON en un objeto llamdo "usuarios"
const usuarios = require('./usuarios.JSON');

//crea un endpoint que devuelve los datos de la base de datos db.json

app.get('/db', (req, res) => {
    res.send(db);
});

//crea un endpoint que devuelve los datos de la base de datos usuarios.json

app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});

//inicializa el servidor en el puerto 3000

app.listen(3000, () => {
    console.log("servidor iniciado en hattp://localhost:3000");
});