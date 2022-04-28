const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');

app.set("port", 1111);
app.set('views', `${path.resolve("./")}/views`);
app.set('view engine', '.hbs');
app.engine('.hbs', hbs({ extname: '.hbs' }));
app.use(express.static(`${path.resolve("./")}/public`));
app.get('/', (req, res) => {
	res.render('main')
});

app.get('/gifs/anime/sfw/:category/:id', (req, res) => {
	let category = req.params.category;
	let id = req.params.id;
	let json = require('./public/anime/sfw.json');

	function returnJson() {
		if(json[category] && json[category][id]) {
			return {
		url: json[category][id]
			}
		} else {
			return {
		error: "No se encontró este gif"
			}
		}
	}
	res.json(returnJson())
})

app.listen(app.get("port"), () => {});