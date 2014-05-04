// Shows the list of oaths
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

  console.log("Oath ID: " + oathId);

  var q = new Parse.Query(Oath);
  q.get(oathId, {
    success:function(obj) {
      res.render('main/oath', {
        oath: obj
      });
    }, 
    error:function(obj, err) {
      alert("Error: " + err);
    }
  });
}

exports.imHere = function(req, res) {
  var oathId = req.params.oathId;
  var lat = req.params.lat;
  var lon = req.params.lon;

  console.log("imHere: " + oathId + ", " + lat + "," + lon);

  var q = new Parse.Query(Oath);
  q.get(oathId, {
    success:function(obj) {
      res.json({ status: "success" });
    }, 
    error:function(obj, err) {
          res.json({ status: "error" });
      alert("Error: " + err);
    }
  });
}

exports.home = function(req, res) {
  res.render('main/index', {

  });
}

