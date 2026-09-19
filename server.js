require("dotenv").config();

const express = require("express");

const app = express();

const db = require("../backend/src/connection/db");

const dashboard = require("../backend/src/routes/dashboardRoutes")

const PORT = 3000;

//Permite receber o JSON
app.use(express.json());
app.use("/api", dashboard);

app.get("/teste", (req, res) => {
    res.json({
        mensagem: "Servidor Sanus funcionando!"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});