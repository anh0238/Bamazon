DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) NOT NULL PRIMARY KEY,
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price INTEGER(11),
    stock_quanity INTEGER(11)
);
