const jwt = require('jsonwebtoken');
const { jetSecret } = require('../config');


//criando função resposavel por verificar token

function autenticar(req, res, next){

    const header = req.header
}