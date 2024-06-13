CREATE DATABASE Ecom;

CREATE TABLE Orders(
    Order_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE Users(
    User_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE Products(
    Product_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    name VARCHAR(255),
    discount VARCHAR(10),
    availability VARCHAR(255),
    brand VARCHAR(255),
    category VARCHAR(255),
    rating FLOAT,
);