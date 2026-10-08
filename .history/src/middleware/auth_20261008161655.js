const jwt = require('jsonwebtoken');
const { jetSecret, jwtSecret } = require('../config');


//criando função resposavel por verificar token

function autenticar(req, res, next){

    const header = req.header.authorization;

    if( header || !header.startsWith("Bearer ")){
        return res.status(401).json({error: "Toekn não informado"});
    }

    //separa a palavra bearer do token em si

    const token = header.split(" ")[1];
    try:

        const payload = jwt.verify(token, jwtSecret);
        
}