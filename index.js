const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

let conexion = mysql.createConnection({
  host: process.env.MYSQLHOST || 'localhost',
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '',
  database: process.env.MYSQLDATABASE || 'academia',
  port: process.env.MYSQLPORT || 3306
});

conexion.connect(function (error) {
  if (error) {
    console.log('Problemas al conectar: ' + error.message);
  } else {
    console.log('Conectado a la base de datos');
  }
});

app.post('/envio', function (req, res) {
  let nombres = req.body.nombres;
  let direc = req.body.direc;
  let correo = req.body.correo;
  let comentarios = req.body.comentarios;

  let sql = 'INSERT INTO datos VALUES (?, ?, ?, ?)';

  conexion.query(sql, [nombres, direc, correo, comentarios], function (error) {
    if (error) {
      console.log(error.message);
      res.send("<script>alert('Problemas al Enviar'); window.location.href=('index.html')</script>");
    } else {
      res.send("<script>alert('Datos Enviados Correctamente'); window.location.href=('index.html')</script>");
    }
  });
});

app.post('/login', function (req, res) {
  let usuario = req.body.usuario;
  let password = req.body.password;

  let sql = 'SELECT * FROM academia WHERE usuario = ? AND password = ?';

  conexion.query(sql, [usuario, password], function (error, filas) {
    if (error) {
      console.log(error.message);
      res.send("<script>alert('Problemas al Conectar'); window.location.href=('login.html')</script>");
    } else if (filas.length == 1) {
      res.redirect('pagina.html');
    } else {
      res.send("<script>alert('Usuario incorrecto'); window.location.href=('login.html')</script>");
    }
  });
});

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, function () {
  console.log('Servidor de la academia en el puerto ' + PUERTO);
});
