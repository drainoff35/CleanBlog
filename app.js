const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

const port = 3000;

//Middlewares
app.use(express.static('public'))

const myLogger = (req,res,next) => {
  console.log("Middleware logging 1");
  next();
}
const myLogger2 = (req,res,next) => {
  console.log("Middleware logging 2");
  next();
}

app.use(myLogger);
app.use(myLogger2);


app.get('/', (req, res) => {
  res.render('index');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda başlatıldı..`);
});
