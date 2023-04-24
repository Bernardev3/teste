const app = require("express")();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/src/login.html");
});

app.post("/", function(req, res) {
    console.log(req.body);

    if (req.body.username == "admin" && req.body.password == "admin1245") {
        res.sendFile(__dirname + "/src/home.html");
    } else {
        res.sendFile(__dirname + "/src/login.html");
    }
});

app.listen(port, function() {
    console.log("Servidor rodando!");
});
