const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys_dev');
const User = require('../database/models/user_model')
// load user model
// const UserSchema = require('../database/schemas/user_schema')
// const User = mongoose.model('users', UserSchema);

// const User = mongoose.model("./database/models/user_model");


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
       const image = profile.photos[0].value;
       console.log("Image URL is: " + image + " . Enjoy!");
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
    User.findById(id).then(user => {
      console.log("DESERIALIZE", user)
      done(null, user)
    });
  });

}