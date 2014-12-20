Parse.initialize("17zBkYXCdSUNAgWF7yRwY7q8Dw5k21eG4H5YJ7Sw", "Z5Z5UnTpbVANInxsvGxtsIl8s2NnZAtBicYuk1Qy");

var user = new Parse.User();

$(function() {


    var paper = {

    	bindings: {
    		'open-profile'			: ['click', 'openProfile'],
    		'save-profile'			: ['click', 'saveProfile'],
    		'do-login'				: ['click', 'doLogin'],
    		'do-signin'				: ['click', 'doSignin'],
    		'open-signin'			: ['click', 'openSignin'],
    		'refresh-dashboard'		: ['click', 'refreshDashboard']
    	},

    	init: function() {
    		this.doBindings();
    	},

    	doBindings: function() {
    		var that = this;
    		$.each(this.bindings, function(key, obj) {
    			var event = obj[0],
    				callback = obj[1],
    				bindName = '[data-' + key + ']';

    			$('body').off(event, bindName);
    			$('body').on(event, bindName, function(evt) {
    				that[callback].call(that, this, evt);
    			});
    		});
    	},

    	doLogin: function() {
    		Parse.User.logIn($('#login-nickname').val(), $('#login-password').val(), {
    			success: function(user) {
    				user = this.user;
    			},
    			error: function(user, error) {
    				alert("Error: " + error.code + " " + error.message);
    			}
    		});
    	},

    	doSignin: function() {

    		var newUser = new Parse.User();

			newUser.set('username', $('#signin-nickname').val());
			newUser.set('name', $('#signin-name').val());
			newUser.set('email', $('#signin-email').val());
			newUser.set('password',	$('#signin-password').val());

    		newUser.signUp (null, {
    			success: function(user) {
    				user = this.user;

    				$('#modal-signin').modal('hide');
    				$('#new-user-created').alert();

    			},
    			error: function(user, error) {
    				alert("Error: " + error.code + " " + error.message);
    			}
    		});
    	},

    	openSignin: function() {
    		$('#modal-login').modal('hide')
			$('#modal-signin').modal('toggle');
    	},

    	openProfile: function() {
    		var current = Parse.User.current();

    		if (current) {
    			$('#modal-profile').modal('toggle');
    		} else {
    			$('#modal-login').modal('toggle');
    		}
    	},

    	saveProfile: function() {
			user.set('username', 	$('#profile-nickname'));
			user.set('name', 		$('#profile-name'));
			user.set('email', 		$('#profile-email'));
			user.set('password', 	$('#profile-password'));
    	},

    	refreshDashboard:function() {

    	}
    };

    paper.init();

});
