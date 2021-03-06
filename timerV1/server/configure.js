var path = require('path'),
routes = require('./routes'),
exphbs = require('express-handlebars'),
express = require('express'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
morgan = require('morgan'),
methodOverride = require('method-override'),
errorHandler = require('errorhandler');
moment = require('moment');
multer = require('multer');
session = require('express-session');


module.exports = function(app) {
app.use(morgan('dev'));
app.use(multer({ dest: path.join(__dirname, 'public/upload/temp')}).single('file'));
//  app.use(bodyParser({
//    uploadDir:path.join(__dirname, 'public/upload/temp')
//  }));
app.use(methodOverride());
app.use(cookieParser('some-secret-value-here'));
        app.use(session({secret:"saraht"}));

routes(app);//moving the routes to routes folder.
app.use('/public/', express.static(path.join(__dirname, '../public')));

if ('development' === app.get('env')) {
app.use(errorHandler());
}
//routes(app);

app.engine('handlebars', exphbs.create({
  defaultLayout: 'main',
  layoutsDir: app.get('views') + '/layouts',
  partialsDir: [app.get('views') + '/partials'],
  helpers:{
    timeago: function(timestamp) {
      return moment(timestamp).startOf('minute').fromNow();
    }
  }
}).engine);
app.set('view engine', 'handlebars');

return app;
};
