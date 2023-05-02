require('dotenv').config();
const express = require("express");
const cors  = require("cors")
const userRouter = require("./Server/api/users/user.router")
const app = express();
const port = process.env.PORT
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("api/users",userRouter)
app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(port, ()=>console.log(`listing at http://localhost:${port}`));
