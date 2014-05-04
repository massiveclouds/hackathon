
var LoginView = Parse.View.extend({

    // The DOM events specific to an item.
    events: {
      "click #loginWithFacebookButton"              : "login",
    },

    login: function() {

        Parse.FacebookUtils.logIn(null, {
          success: function(user) {
            if (!user.existed()) {
              alert("User signed up and logged in through Facebook!");
            } else {
              alert("User logged in through Facebook!");
            }
          },
          error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
          }

      });

    }

});