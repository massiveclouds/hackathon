// Shows the list of memes
exports.index = function(req, res) {
  res.render('main/index', {
  
  });
};

exports.signup = function(req, res) {
  res.render('main/signup', {
    
  });
}

exports.login = function(req, res) {
  res.render('main/login', {
    
  });
}

exports.create = function(req, res) {
  res.render('main/create', {
  
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
    res.render('main/home', {
      title: "Oaths",
      oaths: oaths
    });
  });
}

exports.showOath = function(req, res) {
  var oathId = req.params.oathId;

  res.render('main/oath', {
  
  });
}

var FriendsInit = Parse.FacebookUtils.init({
    appId      : '{661583543896224}',
    status     : true,
    xfbml      : true,
    version    : 'v2.0',
  });
FB.api('/me', {fields: 'last_name'}, function(response) {
  console.log(response);
});
exports.home = function(req, res) {
  // List of oaths
  var query = new Parse.Query(Friends);
  //query.limit(100);
  
  query.find().then(function(friends) {
    res.render('main/index', {
      title: "Friends",
      friends: friends
    });
  });
}

