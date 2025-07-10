const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const animalRoutes = require("./routes/animals");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/animals", animalRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error(err));
