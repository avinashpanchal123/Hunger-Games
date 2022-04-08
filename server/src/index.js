const express = require("express");
const cors = require("cors");
const app = express();

const router = express.Router();


app.use(cors());

app.use(express.json());

const restaurants = require("../restaurants.json");

app.get("/get-restaurants", async(req, res)=>{
    try{
          res.status(200).send(restaurants)
    }
    catch(e){
        return res.status(500).json({ message: e.message, status: "failed" });
    }
})

console.log(restaurants)

module.exports = app;