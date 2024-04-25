SELECT * FROM orders;

SELECT DISTINCT pais FROM orders ORDER BY pais;

SELECT DISTINCT categoria FROM orders ORDER BY categoria;

SELECT * FROM orders WHERE pais = 'Brazil';
SELECT DISTINCT regiao FROM orders WHERE regiao LIKE 'Bra%';
SELECT DISTINCT regiao FROM orders ORDER BY regiao;
SELECT DISTINCT regiao FROM orders WHERE regiao LIKE '%nia';
SELECT DISTINCT regiao FROM orders WHERE regiao LIKE '%ia';
SELECT DISTINCT regiao FROM orders WHERE regiao LIKE '___a%';
SELECT * FROM orders WHERE regiao IN ('Bahia, Ceará');

SELECT * FROM orders 
WHERE quantidade BETWEEN 10 AND 20;

SELECT * FROM orders 
WHERE total_vendas <= 2000;

SELECT 
    id_pedido, 
    total_vendas, 
    quantidade, 
    total_vendas / quantidade AS média 
FROM orders 
WHERE total_vendas <= 2000;

SELECT COUNT(DISTINCT pais) FROM orders;

SELECT 
    COUNT(*),
    TOTAL(total_vendas),
    SUM(total_vendas),
    MIN(total_vendas),
    MAX(total_vendas),
    AVG(total_vendas)
FROM orders
WHERE pais = 'Brazil';

