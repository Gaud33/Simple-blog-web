import express from "express";
import bodyParser from "body-parser";

const app =  express();
const port = 3000;
// var heading = "";
// var Content = "";

let heading = [];
let content = [];
let count = 0;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// middleware to add blog
function addBlog(req, res, next){
    heading[count] = req.body["title"];
    content[count] = req.body["content"];
    // heading = req.body["title"];
    // Content = req.body["content"];
    count++;
    next();
}

app.use(addBlog);

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/add", (req, res)=>{
    res.render("index.ejs", {
        head: heading,
        text: content,
    });
});

app.listen(port, ()=>{
    console.log(`Server running on ${port}.`);
});