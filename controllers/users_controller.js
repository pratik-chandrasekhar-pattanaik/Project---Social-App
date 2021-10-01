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

}

// sign-in and create session for user
module.exports.createSession = function(req, res){

}