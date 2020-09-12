const express = require("express");
const mongoose = require("mongoose");
const Data = require("./data");
const Videos = require("./dbModal");

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//DB config
const connection_url =
  "mongodb+srv://admin:MuNXsMZJhrKbVbW7@cluster0.vq7o4.mongodb.net/tiktok?retryWrites=true&w=majority&ssl=true";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  //POST req is to add data to database
  //It will let us add a video document to a videos collection
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen

app.listen(port, () => {
  console.log(`listening on localhost: ${port} `);
});
