const passport = require('passport')

exports.authUser = passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/log-in',
})

exports.authIsAuthenticated = (req, res, next) => {
    console.log(req.isAuthenticated())
    if(req.isAuthenticated()) return next()
    return res.redirect('/log-in')
}

exports.Logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}
