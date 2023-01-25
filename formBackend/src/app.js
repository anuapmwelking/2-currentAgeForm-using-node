const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// console.log(path.join(__dirname, "../templates/partials"));
// console.log(path.join(__dirname, "../public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
  //   res.get("index");
});
app.post("/register", async (req, res) => {
  try {
    // console.log(req.body.name);
    // res.send(req.body.name);
    const registerStudent = new Register({
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      date: req.body.date,
      schoolName: req.body.schoolName,
    });
    const registered = await registerStudent.save();
    res.status(201).render("index");
  } catch {
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
