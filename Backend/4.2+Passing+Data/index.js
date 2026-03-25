import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs', { titleName: 'Enter your name below 👇'})});

app.post("/submit", (req, res) => {
  const { body } = req;
  const name = body['fName'] +  body['lName'];
  const letters = name.length;
  res.render('index.ejs', {
    titleName: `There are ${letters} letters in your name.`
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
