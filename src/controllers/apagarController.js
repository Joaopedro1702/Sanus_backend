// fetch de DELETE

async function apagarController(repo) {
	return async function(req, res) {
		try {
			await repo(req.params.id);
			return res.status(200).json({status: true});
		} catch (err) {
			return res.status(500).json({error: err});
		}
	}
}

module.exports = apagarController;