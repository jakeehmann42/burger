### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);