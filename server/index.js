const express = require("express");
const app = express();
const connectDB = require("./config/db");

//Connect database
connectDB();

//Middleware, bodyparser replacement
app.use(express.json({ extended: false }));

app.get("/", function(req, res) {
  res.send("Hello Kisso!");
});

//Routes
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/profiles", require("./routes/profiles"));

app.listen(3000, function() {
  console.log("app listening on port 3000!");
});
