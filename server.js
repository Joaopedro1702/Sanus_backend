require("dotenv").config();

const express = require("express");

const app = express();

const routes = require("../backend/src/routes/index")

const cors = require('cors');

const PORT = 3000;

//Permite receber o JSON
app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.get("/teste", (req, res) => {
    res.json({
        mensagem: "Servidor Sanus funcionando!"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});