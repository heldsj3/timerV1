var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home');
    module.exports = function(app) {
	    router.get('/', home.index);
	    router.get('/about',home.about);
	    router.get('/loginform',home.loginForm);
	    router.post('/loginform',home.loginFormSubmit);
	    app.use(router);
    };
