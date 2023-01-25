// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// mongoose
//   .connect("mongodb://localhost:27017", {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     // useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("connection established");
//   })
//   .catch((e) => {
//     console.log("connection error");
//   });
// // mongodb://localhost:27017
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/hbsData")
  .then(() => {
    console.log("connection established");
  })
  .catch(() => {
    console.log("connection error");
  });
