const express = require('express');
const app = express();
const router = require('./routes');

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.firstname = "";

app.use( express.urlencoded({extended: true}) );

app.use(router);

app.listen(port, () => {
    console.log("server is running");
});