//aqui vai ter um fetch do tipo POST

async function criarController(repo) {
	return async function(req, res) {
		try {
			await repo(req.body);
			return res.status(200);
		} catch (err) {
			return res.status(500).json({error: err});
		}
	}
}
