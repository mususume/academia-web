CREATE DATABASE IF NOT EXISTS academia CHARACTER SET utf8 COLLATE utf8_general_ci;
USE academia;

CREATE TABLE datos (
  nombres VARCHAR(30),
  direc VARCHAR(30),
  correo VARCHAR(30),
  comentarios VARCHAR(50)
);

CREATE TABLE academia (
  usuario VARCHAR(30),
  password VARCHAR(30)
);

INSERT INTO academia (usuario, password) VALUES
('usuarioxy', '123456'),
('admin', '123456');
