const local = require("./localStrategy");



module.exports = passport => {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(id, done) {
        done(null, id);
        console.log("deser :" + id)
    });
    local(passport);
}

