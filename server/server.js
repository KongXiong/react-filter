const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
	res.send({
		items: [
			"Apples", "Broccoli", "Chicken", "Bacon", "Eggs", "Salmon", "Granola", "Bananas", "Beer", "Wine", "Yogurt"
		]
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
