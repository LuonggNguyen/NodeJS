const handlebars = require('express-handlebars');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
const Course = require('./app/models/Course');

//connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(methodOverride('_method'));

//Template Engine

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.get('/test', (req, res) => {
    Course.find({}, function(err, courses){
        if(!err) {
            res.json(courses);
        }else{
            next(err);
            res.status(400).json({error: 'ERROR'});
        }
    });
  });

route(app);

app.listen(port, () =>
    console.log('ASM App listening at http://localhost:' + port),
);
