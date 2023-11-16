const connection = require('../model/conexao');
const express = require('express');
const connection = require('../model/conexao');
const app = express();

// Configurando cabeçalhos para evitar o cache
app.use((req, res, next) => {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    next();
});

// Rota para logout
app.post("/logout", (req, res) => {
    // Lógica de logout aqui
    // ...

    // Redireciona para a página de login
    res.redirect("/login");
});
