const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const colors = require("colors");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");
// const connectDB = require("./config/db");

// dotenv.config({ path: "./config/config.env" });

// connectDB();

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log(`Connected to database: ${config.database}`.blue.underline);
});
mongoose.connection.on("error", (err) => {
  console.log(`Database Error: ${err}`.red.underline);
});

const app = express();

const users = require("./routes/users");
const drivers = require("./routes/drivers");
const documentRouter = require('./routes/routes'); 
const items = require('./routes/items'); 
const sales = require('./routes/sales'); 
const orders = require('./routes/orders'); 
const products = require('./routes/products'); 
const books = require('./routes/books'); 


// CORS Middleware
app.use(cors());
// app.options('*', cors());

// Body-Parser Middleware
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Set Static Folders
// app.use('/static',express.static('/public'));
app.use(express.static(path.join(__dirname, "dist/flowerproject")));

// Routes
app.use("/users", users);
app.use("/drivers", drivers);
app.use('/documents/', documentRouter);
app.use('/items/',items);
app.use('/sales/',sales);
app.use('/orders/',orders);
app.use('/products/',products);
app.use('/books/',books);


// app.get("/", (req, res) => {
//   res.send("Invalid Endpoint");
// });

// Routes 
app.get('/', (req, res) => {
  res.send('Hello World');
});

if(process.env.NODE_ENV="production"){
  app.use(express.static("dist/flowerproject"));
  const path=require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(_dirname,'dist','flowerproject','index.html'));
  })
}

// Port Number
const port = 5000;
app.listen(port, () => {
  console.log(
    `Server listening on ${process.env.NODE_ENV} mode ont port ${port}!`.yellow
      .bold
  );
});
