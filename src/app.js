const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const quotesData = fs.readFileSync(path.join(__dirname, 'data/quotes.json'),
    { encoding: 'utf8', flag: 'r' });

const quotes = JSON.parse(quotesData);

//console.log(quotes);

app.get('/', function (req, res) {
    //res.send('Welcome to my Quotes application!!!');
    res.render('index', { title: 'Famous quotes to set your mood today!', quotes: quotes });
})

app.listen(PORT, console.log(`Server listeining on PORT ${PORT}`));
