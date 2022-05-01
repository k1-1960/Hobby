const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const canvas = require ('canvas');

class im {
	constructor () {
		(async () => {
		const lienzo = canvas.createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');

const background = await canvas.loadImage('/bg.jpg');

		ctx.drawImage(background, 0, 0, liezo.width, lienzo.height)
		})()

		return lienzo.toDataURL();
	}
}

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

app.get('/gifs/anime/sfw/:category/:id/view', (req, res) => {
	let category = req.params.category;
	let id = req.params.id;
	let json = require('./public/anime/sfw.json');

	function returnJson() {
		if(json[category] && json[category][id]) {
			return json[category][id]
		} else {
			return {
		error: "No se encontró este gif"
			}
		}
	}
	res.redirect(returnJson())
});

app.get('/im', (req, res) => {
	const url = new im();
	res.redirect(url)
})

app.listen(app.get("port"), () => {});