export default (req, res) => {
	const input = req.body.text;
	res.status(200).json({ text: input });
};
