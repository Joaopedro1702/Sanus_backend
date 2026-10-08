const Erro

// aqui vai ter o bom e velho fetch de GET

function consultarController(repo, req, res) {
	return async function(req, res) {
		if (req.params.id == null) {
			try {
				const resultado = await repo();
				return res.status(200).json(resultado);
			} catch (err) {
				return res.status(500).json({error: err});
			}
		} else {
			try {
				const resultado = await repo({id: req.params.id});
				return res.status(200).json(resultado);
			} catch (err) {
				return res.status(500).json({error: err.message});
			}
		}
	}
}

module.exports = consultarController;
