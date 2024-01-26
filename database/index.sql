CREATE DATABASE IF NOT EXISTS eduventadb;


USE eduventadb;


-- Create the clients table
CREATE TABLE
  clients (
    clientId INT PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(20)
  );

  ALTER TABLE clients MODIFY clientId INT AUTO_INCREMENT;



-- Create the credits table
CREATE TABLE
  credits (
    creditId INT PRIMARY KEY,
    clientId INT,
    total DECIMAL(10, 2),
    state VARCHAR(50),
    FOREIGN KEY (clientId) REFERENCES clients(clientId)
  );


-- Create the credit_details table
CREATE TABLE
  credit_details (
    creditDetailId INT PRIMARY KEY,
    creditId INT,
    date DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (creditId) REFERENCES credits(creditId)
  );


-- Create the products table
CREATE TABLE
  products (
    productId INT PRIMARY KEY,
    name VARCHAR(255),
    package_price DECIMAL(10, 2),
    package_quantity INT,
    unit_price DECIMAL(10, 2),
    date_of_purchase DATE
  );


-- Create the inventory table
CREATE TABLE
  inventory (
    inventoryId INT PRIMARY KEY,
    productId INT,
    amount INT,
    stock INT,
    date DATE,
    FOREIGN KEY (productId) REFERENCES products(productId)
  );


-- Create the credit_detail_product table
CREATE TABLE
  credit_detail_product (
    creditDetailId INT,
    productId INT,
    quantity INT,
    FOREIGN KEY (creditDetailId) REFERENCES credit_details(creditDetailId),
    FOREIGN KEY (productId) REFERENCES products(productId)
  );