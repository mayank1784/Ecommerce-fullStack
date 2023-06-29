const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(errorMiddleware);
//Routes Imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);


module.exports = app;