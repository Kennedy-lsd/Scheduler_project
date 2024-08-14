const express = require("express");
const mongoose = require("mongoose");
const scheduledRoute = require("./routers/scheduledRouter");
const taskForDayRoute = require("./routers/taskForDayRouter");
const counterDataRoute = require("./routers/counterDataRouter")
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routers
app.use("/apiv1/Scheduled", scheduledRoute);
app.use("/apiv2/TaskForDay", taskForDayRoute);
app.use("/apiv3/counterData", counterDataRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello there" });
});

//DB
mongoose
  .connect(
    "mongodb+srv://admin:RD5gtJ8IeemJ5D89@cluster0.dulcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection faild");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
