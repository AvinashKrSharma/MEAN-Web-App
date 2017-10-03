var express = require('express');

var app = express();

var port = 5000;
 
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'pug');


app.get('/', function(req, res){
    res.render('index', {nav: [{link: "/books", text: "Books"}, {link: "/authors", text: "Authors"}]});
});

app.get('/books', function(req, res){
    res.send('Hello Books');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});
