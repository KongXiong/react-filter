const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require("node-fetch");
const key = 'AIzaSyCqoTF406QHFuJ2_KLgDGYIozDOR1qWsT8';

app.get('/api', (req, res) => {
	let url = `https://www.googleapis.com/books/v1/volumes`
		+`?q=wind`
		+`&key=${key}`

	fetch(url)
		.then(response =>
	    	response.json()
	    	.then(json => 
	    		res.send(json.items)
	    	)
    	)
    	.catch(error => 
	  		console.log(error)
	  	);
});

app.listen(port, () => console.log(`Listening on port ${port}`));