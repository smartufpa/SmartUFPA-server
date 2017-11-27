const express = require("express");
var app = express();
const PORT = 8080;
app.get("/",function(req,res){
    var now = new Date();
    var homePageTemplate = "<h4>Smart UFPA Server</h4>" +
        "<hr>" + now;
    res.send(homePageTemplate);
});

app.listen(PORT,function () {
    console.log("Server Listening at localhost:" + PORT);
})