var mongoclient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var url = "mongodb://localhost:27017";

var app = express();

app.use(express.urlencoded({ extended: true })); // body parser
app.use(express.json());
app.use(cors());

app.get("/categories", function (req, res) {
  mongoclient.connect(url, (err, clientObject) => {
    if (!err) {
      var dbo = clientObject.db("smartshopdb");
      dbo
        .collection("tblcategories")
        .find()
        .toArray((err, documents) => {
          if (!err) {
            res.send(documents);
          }
        });
    }
  });
});
app.get("/products", function (req, res) {
  mongoclient.connect(url, (err, clientObject) => {
    if (!err) {
      var dbo = clientObject.db("smartshopdb");
      dbo
        .collection("tblproducts")
        .find()
        .toArray((err, documents) => {
          if (!err) {
            res.send(documents);
          }
        });
    }
  });
});

app.get("/products/category/:category", function (req, res) {
  mongoclient.connect(url, (err, client) => {
    if (!err) {
      var dbo = client.db("smartshopdb");
      dbo
        .collection("tblproducts")
        .find({ category: req.params.category })
        .toArray((err, documents) => {
          if (!err) {
            res.send(documents);
          }
        });
    }
  });
});

app.listen(8080);
console.log("Server is Listning....");
