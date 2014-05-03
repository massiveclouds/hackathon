// Shows the list of memes
exports.index = function(req, res) {
  res.render('main/index', {
  
  });
};

exports.signup = function(req, res) {
  res.render('home/index', {
  
  });
}

exports.login = function(req, res) {
  res.render('home/login', {


  });
}

exports.create = function(req, res) {
  res.render('home/index', {
  
  });
}

///////////////////////////////
//// Logged In User views /////
///////////////////////////////

var Oath = Parse.Object.extend("Contracts");

exports.home = function(req, res) {
  // List of oaths
  var query = new Parse.Query(Oath);
  //query.limit(100);
  query.descending('creation');
  query.find().then(function(oaths) {
    res.render('home/index', {
      title: "Oaths",
      oaths: oaths
    });
  });

  res.render('home/index', {
  
  });
}

exports.oath = function(req, res) {
  var oathId = req.params.oathId;

  res.render('home/index', {
  
  });
}