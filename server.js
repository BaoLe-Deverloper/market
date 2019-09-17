const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
mongoose.connect("mongodb://baole:5qAm25mNlX10TrSp@cluster0-shard-00-00-xctyj.mongodb.net:27017,cluster0-shard-00-01-xctyj.mongodb.net:27017,cluster0-shard-00-02-xctyj.mongodb.net:27017/marketVietnamRussia?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true });


const userRouters = require("./api/routers/users");

app.use("/user", userRouters);


app.use( (error)=> console.log(error))
app.listen(8000, ()=> console.log("server run port 8000 !"))

module.exports = app;