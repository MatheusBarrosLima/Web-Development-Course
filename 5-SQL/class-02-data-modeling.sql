DROP TABLE students;
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    id_course INTEGER NOT NULL,
    FOREIGN KEY (id_course) REFERENCES courses(id) ON DELETE CASCADE
);

DROP TABLE courses;
CREATE TABLE IF NOT EXISTS courses(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    workload VARCHAR CHECK (workload IN ('40h', '60h', '160h', '240h')) DEFAULT '160h'
);

INSERT INTO students (name, id_course) VALUES
('Neji', 1),
('Shikamaru', 1),
('Rock lee', 2);

INSERT INTO courses (name, workload) VALUES
('Controle do Chakra', '40h'),
('Jutsu clone das sombras', '160h'),
('Jutsu de Invocação', '240h');