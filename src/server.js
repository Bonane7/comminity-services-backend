//1) declaration
import express from "express";
//4) import dotenv
import dotenv from "dotenv";

//7 import mongoose
import mongoose from "mongoose";

//2)nous apeller tout les element d'express dans app
const app = express();

//5)nous appelon dotenv pour parcourir la route proccess .env
dotenv.config();

//3 nous appelon le port
const port = process.env.PORT;
//8connect mdb
const db = process.env.DATABASE;

//6) connect the app to the port
app.listen(port, () => {
  console.log(`Server Runing on Port: ${port}`);
});

//9)connect mongoose
mongoose
  .connect(db)
  .then(() => {
    console.log("Database connected successfuly");
  })
  .catch((error) => {
    console.log(`Error is ${error}`);
  });
