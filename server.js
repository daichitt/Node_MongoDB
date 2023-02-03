const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mondoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://morostagrm:XLqdSkFK2rnKj!z@cluster0.lp4hqwl.mongodb.net/Food?retryWrites=true&w=majority"
)
.then(() => console.log("接続に成功しました"))
.catch((err) => console.log(err));

console.log(mongoose.connection.readyState);
app.listen(3000,() => {
    console.log("sucefully open sever ")
})
