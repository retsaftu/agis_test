const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jsonParser = express.json();

const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/api/users", userRouter);
app.get("/api/users/:id", userRouter);
app.post("/api/users",jsonParser, userRouter);
app.delete("/api/users/:id", userRouter);
app.put("/api/users",jsonParser, userRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});


mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});
