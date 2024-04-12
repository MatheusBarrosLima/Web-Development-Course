-- DDL
DROP TABLE students;
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    age NUMERIC
);

-- DML
INSERT INTO students (name, cpf, age) 
VALUES 
('Alucard', '123.123.123-04', 600),
('Escanor', '123.123.123-05', 40),
('Levi', '123.123.123-06', 30);

--DQL
SELECT * FROM students;

SELECT name, age FROM students;

SELECT * FROM students
WHERE id >= 2 LIMIT 3;

SELECT * FROM students
WHERE age >= 18 AND age <=70;

--TCL
BEGIN TRANSACTION;
ROLLBACK;
COMMIT;

--DDL
ALTER TABLE students
ADD COLUMN anime TEXT;

UPDATE students
SET anime= 'Shingeki no Kyojin'
WHERE id = 3;

