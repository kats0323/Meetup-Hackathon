const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");




require("./database/models/user_model");
require("./database/models/meetup_model");

require("./config/passport")(passport);

const auth = require("./routes/auth");
const meetup = require("./routes/meetup");




const keys = require("./config/keys");
const app = express();
const port = 3000;
const path = require("path")


mongoose.Promise = global.Promise;
// mongoose connect
mongoose
  .connect(
    keys.mongoURI,
    {
      useNewUrlParser: true
    }
  ) // note connect returns promise
  .then(() => console.log("MongoDb connection"))
  .catch(err => console.log(err));


app.use(methodOverride("_method"));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(session({
        secret: "superSecretPassword",
        resave: false,
        saveUninitialized: false
    })
);


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//passport middleware
app.use(passport.initialize());
app.use(passport.session());



app.use(require("./routes/auth"));
app.use(require("./routes/meetup"));
app.use(require("./routes/profile"));




app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,"public")));



 
app.listen(port, ()=> console.log(`Server is running on port ${port}`));