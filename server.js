const express = require("express");
const cors  = require("cors")
const app = express();
const port = 3000
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(port, ()=>console.log(`listing at http://localhost:${port}`));
