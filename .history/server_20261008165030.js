const express = require("express");

const app = express();

const routes = require("./src/routes")

const cors = require('cors');

const { port } = require('./src/config');

//Permite receber o JSON
app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.use("/api", routes);

app.use((req, res) =>{
    res.status(404).json({error: "Rota não encontrada"});
});



app.get("/teste", (req, res) => {
    res.json({
        mensagem: "Servidor Sanus funcionando!"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});