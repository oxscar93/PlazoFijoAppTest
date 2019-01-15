alter user 'root'@'localhost' identified with mysql_native_password by '150150';

Create database PlazoFijo;
USE PlazoFijo;

CREATE TABLE Banco (
	id INT AUTO_INCREMENT PRIMARY KEY,
	banco VARCHAR(50) NOT NULL,
    createdAt Date NULL,
    updatedAt Date NULL
);

CREATE TABLE BancoPlazoTasa (
	id INT AUTO_INCREMENT,
	bancoId INT,
    plazo INT,
	tasa INT,
    createdAt Date NULL,
    updatedAt Date NULL,
    
    PRIMARY KEY (`id`,`plazo`),
    KEY `bancoId` (`bancoId`),
    CONSTRAINT `bancoplazotasa_ibfk_1` FOREIGN KEY (`bancoId`) REFERENCES `banco` (`id`)
);







