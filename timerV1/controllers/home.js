module.exports = {
  index: function(req, res) {
	if (req.session.user) {
		res.render('timer');
	} else {
		res.render('index');
	}
     },
   about: function(req,res) {
	res.render('about');
	},
  loginForm: function(req,res) {
	res.render('loginform');
  },
  loginFormSubmit: function(req,res) {
  }

  };

