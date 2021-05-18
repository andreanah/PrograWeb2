/*

Equipo 4

Integrantes:

1662578 Ligia Samara Diaz Hirashi 
1803707 Abraham Reyes Mu�iz
1800066 Edgar Alejandro Ni�o Sanchez
1803204 Andrea Nahomi Rosas Sanchez

QUERY #3

Descripci�n:

- Se elimino la tabla [Photos] de la base de datos.

- Se agrego la columna Photos a la tabla [Product].

Fecha de actualizaci�n: 2021-05-17
*/

USE [TiendaDeMujicaDB]
GO

ALTER TABLE Photos
DROP CONSTRAINT FK_PhotosProduct;   
GO

DROP TABLE Photos

ALTER TABLE Product
ADD URLImage VARCHAR(MAX) NOT NULL DEFAULT('')