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
const errorController = require('./controllers/error');

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

app.listen(3000);
