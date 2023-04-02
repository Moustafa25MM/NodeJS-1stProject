const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.set('view engine', 'pug');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'Page not found'});
});

app.listen(3000);
