const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {},
    })
);
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    partialsDir: './views/partials',
    helpers: {
        section: hbs_sections(),
        ifStr(s1, s2, options) {
            if (s1 === s2) {
                return options.fn(this);
            }
            return options.inverse(this);
        },
    },
});
app.set('trust proxy', 1); // trust first proxy

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./src/middlewares/locals.mdw')(app);
app.get('/', (req, res) => {
    res.render('home');
});
app.use(express.static('public'));
app.use('/', require('./src/routes/account.route'));
app.use('/', require('./src/routes/product.route'));
app.use('/', require('./src/routes/customer.route'));
app.use('/', require('./src/routes/turnover.route'));

app.listen(port, () => {
    console.log(`My app listening on port ${port}`);
});
