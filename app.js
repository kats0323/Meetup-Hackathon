const express = require("express");

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const passport = require("passport");

require("./database/models/user_model");
require("./config/passport")(passport);

const auth = require("./routes/auth");
const index = require("./routes/index");




const keys = require("./config/keys");
const app = express();
const port = 3000;


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


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require("./routes/index"));
app.use(require("./routes/auth"));


app.use(express.static(__dirname +"/public"));

 
app.listen(port, ()=> console.log(`Server is running on port ${port}`));