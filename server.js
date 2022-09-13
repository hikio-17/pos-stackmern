const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/userRoutes");
const billsRoutes = require("./routes/billsRoutes");
const path = require("path");

require("colors");
const connectDB = require("./config/config");

// dotenv config
dotenv.config();

// connect to mongoDB
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes

app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bills", billsRoutes);

// --------------------------deployment------------------------------
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// port
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgWhite);
});
