const User = require('../models/users');

module.exports.profile = function(req, res){
    return res.render('profile', {
        title: 'User Profile'
    });
}

module.exports.signUp = function(req, res){
    return res.render("user_signup",{
        title: 'Sign Up'
    })
}

module.exports.signIn = function(req, res){
    return res.render("user_signin",{
        title: "Sign In"
    })
}

// get sign up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/sign-up');
            });
        }
        else{
            return res.redirect('back');
        }
    })
}

// sign-in and create session for user
module.exports.createSession = function(req, res){

}