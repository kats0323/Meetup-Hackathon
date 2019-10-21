const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys_dev');
// load user model
const User = mongoose.model('users');


// export the passport function
module.exports = function(passport){
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true // enables working on heroku
    }, (accessToken, refreshToken, profile, done) => {
       // console.log(accessToken);
       // console.log(profile);
       // use substring to end the photo at jpeg
       const image = profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'));
       console.log(image);
       // create user with info coming from google profile
       const newUser = {
         googleID: profile.id,
         firstName: profile.name.givenName,
         lastName: profile.name.familyName,
         email: profile.emails[0].value,
         image: image
       }
       // check for existing user
       User.findOne({
         googleID: profile.id
       })
       .then(user => {
         if(user){
           // return the user already created
           done(null, user);
         }else {
           // create user and return it
           new User(newUser)
            .save()
            .then(user => done(null, user));
         }
       })
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });

}