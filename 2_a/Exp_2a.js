const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to EJS Templating!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', description: 'This is the about page rendered using EJS.' });
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');

});
