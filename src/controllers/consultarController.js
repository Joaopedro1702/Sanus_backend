// aqui vai ter o bom e velho fetch de GET

async function consultarController(repo, req, res) {
	return async function(req, res) {
		if (req.body == null) {
			try {
				const resultado = await repo();
				return res.status(200).json(resultado);
			} catch (err) {
				return res.status(500).json({error: err});
			}
		} else {
			try {
				const resultado = await repo(req.body);
				return res.status(200).json(resultado);
			} catch (err) {
				return res.status(500).json({error: err});
			}
		}
	}
}
