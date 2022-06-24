const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");

const app = express();
const port = process.env.PORT||3000;

//setting the path (if we want to use static website in our project)
const staticpath = path.join(__dirname,"../public"); //public folder contains all the static file for the website
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

//middleware
//app.use('/css',express.static(path.join(__dirname,"../node_modules")))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);
//routing
//app.get(path,callback)
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
} )