export default (req, res) => {
	const id = req.query.id;
	res.status(200).json({ '送られたidは': id });
};
