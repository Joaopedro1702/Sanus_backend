const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController.js");

router.get("/dashboard/faturamento-tarja", dashboardController.getFaturamentoPorTarja);
router.get("/dashboard/faturamento-forma-pagamento", dashboardController.getFaturamentoPorFormadePagamento);

module.exports = router;
