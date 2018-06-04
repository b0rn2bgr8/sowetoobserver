const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const morgan = require('morgan');

const app = express();


mongoose.connect('mongodb://soweto_observer_dba:Tebogo6621@ds125680.mlab.com:25680/soweto_observer_db', err=>{
    if(err){console.log(err)}
    console.log('Database connection successful');
})

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: false}));
app.use(morgan('dev'));

var userRoutes = require('./routes/user.route');
app.use(userRoutes);

var articleRoutes = require('./routes/article.route');
app.use(articleRoutes);

var categoryRoutes = require('./routes/category.route');
app.use(categoryRoutes);

app.listen(8080, ()=>{
    console.log('Server running on 8080');
});