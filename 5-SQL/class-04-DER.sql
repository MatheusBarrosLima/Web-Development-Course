DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    cpf VARCHAR NOT NULL UNIQUE,
    street VARCHAR,
    neighborhood VARCHAR,
    city VARCHAR
);

DROP TABLE IF EXISTS phones;
CREATE TABLE IF NOT EXISTS phones(
    id_client INTEGER NOT NULL,
    number VARCHAR NOT NULL,
    PRIMARY KEY (id_client, number),
    FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    price INTEGER NOT NULL,
    description VARCHAR
);

DROP TABLE IF EXISTS sales;
CREATE TABLE IF NOT EXISTS sales(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     id_client INTEGER NOT NULL,
     id_product INTEGER NOT NULL,
     amount INTEGER NOT NULL, 
     date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE,
     FOREIGN KEY (id_product) REFERENCES products(id)
);
SELECT * FROM clients;
INSERT INTO clients(name, cpf) VALUES
('Matheus', '000.000.000-01'),
('Pablo', '000.000.000-02'),
('Ant Carlos', '000.000.000-03');

SELECT * FROM phones;
INSERT INTO phones(number, id_client) VALUES
('(88) 90000-0001',1),
('(88) 90000-0002',1),
('(88) 90000-0003',2),
('(88) 90000-0004',3);

SELECT * FROM products;
INSERT INTO products (name, price) VALUES
('Gabinite', 350),
('RAM 16GB', 200),
('SSD 512GB', 350),
('Processador i7 12000', 1200),
('GTX 2080', 1600),
('Monitor', 1000),
('Cadeira', 1500),
('Mouse', 200),
('Teclado', 200);

SELECT * FROM sales;
INSERT INTO sales (id_client, id_product, amount) VALUES
(1, 3, 1),
(1, 2, 2),
(1, 5, 1),
(2, 5, 1),
(2, 6, 1);


SELECT clients.name, phones.number 
FROM clients INNER JOIN phones
ON clients.id == phones.id_client;

SELECT
    clients.name,
    products.name AS product,
    sales.amount,
    products.price,
    sales.amount * products.price AS total

    
FROM clients
INNER JOIN sales ON sales.id_client == clients.id
INNER JOIN products ON sales.id_product == products.id
WHERE clients.id = 1