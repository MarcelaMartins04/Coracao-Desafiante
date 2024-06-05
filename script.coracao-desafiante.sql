CREATE DATABASE CoracaoDesafiante;

USE CoracaoDesafiante;

CREATE TABLE Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45));

CREATE TABLE Calculadora (
idComb int primary key auto_increment,
nome1 varchar(45),
nome2 varchar(45),
compatibilidade decimal(3,0),
fkUsuario int,
foreign key fkUsuario (fkUsuario) references Usuario(idUsuario));

CREATE TABLE Maximo_e_Minimo (
idMax_Min int primary key auto_increment,
compatibilidadadeMax DECIMAL,
compatibilidadadeMin DECIMAL);








