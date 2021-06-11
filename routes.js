const express = require('express');
const router = express.Router();
const app = express();

let firstname;
//routes

router.get('/', (req, res, next) => {
    res.render('home');
});

router.post('/result', (req, res, next) => {
    firstname = req.body.firstname;

    res.render('result', {firstname});
    
});

router.get('/blog', (req, res, next) => {
    res.render('blog', {firstname});
});

router.get('/contacts', (req, res, next) => {
    res.render('contacts');
});

//aucune route => 404

router.use((req, res, next) => {
    res.status(404).render('notfound');
});

module.exports = router;