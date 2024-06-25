-- Certifique-se de que o banco de dados 'Papelaria' existe
CREATE DATABASE papelaria;

-- Use o banco de dados 'Papelaria'
USE Papelaria;

-- Criação da tabela 'Produto'
CREATE TABLE  Produto (
    idProduto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT NOT NULL
);

-- Inserção de alguns dados de exemplo na tabela 'Produto'
INSERT INTO Produto (nome, descricao, preco, quantidade) VALUES
('Marca-texto', 'marca-texto leon verde', 8.00, 3),
('Caderno', 'Caderno tema free fire', 19.00, 5),
('Estojo', 'estojo borussia', 15.00, 10);