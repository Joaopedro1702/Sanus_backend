// fetch PUT

async function atualizarController(repo) {
	return async function(req, res) {
		try {
			await repo(req.body);
			return res.status(200).json({status: true});
		} catch (err) {
			return res.status(500).json({error: err});
		}
	}
}

module.exports = atualizarController;