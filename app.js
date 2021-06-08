const express = require('express');
const app = express();
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config()


//db
//mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected"));
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connected"))

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const postRoutes = require("./routes/post"); // don't need to write the full file name like as, "post.js", just write it down "post"


// const myOwnMiddleware = (req, res, next) => {
//     console.log("middleware applied... !");       // we have to mention that it will go for the next phase,that is why we have to menstion  "next", otherwise it will be stuck in middleware
//     next();                                       // as we know that node js is a process of event loop
// };
// app.use(myOwnMiddleware);



// middleware
app.use(morgan("dev"));
app.use(bodyParser.json()); // bodyParser comes with jason method
app.use(expressValidator());
// respond with "hello world from node js ... !" when a GET request is made to the homepage
app.use('/', postRoutes);  // we are write here app.use method , beacuse of we will calling post.js/routers as a "middleware"





const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("A Node Js API is listening on port: ${port}");
});