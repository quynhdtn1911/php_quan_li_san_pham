const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const db = require('./config/db');
const route = require('./route');

// connect to mongodb
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.use(methodOverride('_method'));

// template engine
app.engine('hbs', handlebars.create({
  extname: 'hbs',
  helpers: {
    sum: (a,b) => a+b
  }
}).engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// express json
app.use(express.json());
app.use(express.urlencoded());

// route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});