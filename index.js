const express  = require("express");
const app = express();
import connection from "./databases/database";

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send("Inicio da Luta")
})



app.listen(5050,()=>{
    console.log("ta on")
});