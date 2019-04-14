DROP database if exists burgers_db; 
CREATE DATABASE burgers_db;
USE burgers_db;

INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt) 
VALUES ('Free Range Buffalo Burger', false, Now(), Now()),
('Big Cheese Burger with extra cheesiness', false Now(), Now()),
('Love Burger (vegan)', false, Now(), Now());
